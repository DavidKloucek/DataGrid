<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid;

use DemoApp\Model\DataGrid\Column\ColumnHtml;
use DemoApp\Model\DataGrid\Interfaces\Column;
use DemoApp\Model\DataGrid\Interfaces\DataSource;
use DemoApp\Model\DataGrid\Interfaces\Extension;
use DemoApp\Model\DataGrid\Interfaces\Filter;
use DemoApp\Model\DataGrid\Interfaces\FilterValidableValue;
use DemoApp\Model\DataGrid\Interfaces\GridStorage;
use DemoApp\Model\DataGrid\Interfaces\RequestAction;
use DemoApp\Model\DataGrid\State\ActionStateResult;
use DemoApp\Model\DataGrid\State\FullStateResult;
use DemoApp\Model\DataGrid\State\RequestStateResult;
use DemoApp\Model\Utils\Arrays\ArrayCollection;
use DemoApp\Model\Utils\Arrays\Arrays;
use Closure;
use Nette\Utils\Paginator;
use Nette\Utils\Validators;
use Symfony\Component\PropertyAccess\PropertyAccessor;

class Grid
{
    /** @var array<int, int> */
    private array $pageSizeOptions = [10, 20, 50, 100, 500, 1000];

    /** @var Column[] */
    private array $columns = [];

    /** @var Filter[] */
    private array $filters = [];

    /** @var array<int, Extension> */
    private array $extensions = [];

    private ?FullStateResult $computedState = null;

    private DataSource $dataSource;

    private readonly Paginator $paginator;

    private ?Closure $onFilterChange = null;

    private readonly PropertyAccessor $propAccess;

    private GridStorage $stateStorage;

    private bool $isReorderColumnsEnabled = true;

    /** @var array<int, callable> */
    private array $onCreate = [];

    public function __construct(private readonly string $name)
    {
        $this->paginator = new Paginator();
        $this->propAccess = new PropertyAccessor();
    }

    public function addOnCreateState(callable $func): void
    {
        $this->onCreate[] = $func;
    }

    public function addExtension(Extension $ext): void
    {
        $this->extensions[] = $ext;
    }

    public function setOnFilterChange(?callable $func): self
    {
        $this->onFilterChange = $func ? Closure::fromCallable($func) : null;
        return $this;
    }

    public function setStorage(GridStorage $storage): self
    {
        $this->stateStorage = $storage;
        return $this;
    }

    public function getStorage(): GridStorage
    {
        return $this->stateStorage;
    }

    public function setDataSource(DataSource $dataSource): self
    {
        $this->dataSource = $dataSource;
        return $this;
    }

    public function getDataSource(): DataSource
    {
        return $this->dataSource;
    }

    public function addColumn(Column $column): self
    {
        $this->columns[$column->getKey()] = $column;
        return $this;
    }

    /**
     * @param array<int, string> $keys
     */
    public function setColumnOrder(array $keys): self
    {
        return $this;
    }

    public function addFilter(Filter $filter): self
    {
        $this->filters[$filter->getName()] = $filter;
        return $this;
    }

    public function removeColumn(string $key): void
    {
        unset($this->columns[$key]);
    }

    public function setEnableReorderColumns(bool $yes): self
    {
        $this->isReorderColumnsEnabled = $yes;
        return $this;
    }

    public function getColumnByKey(string $key): ?Column
    {
        return Arrays::get($this->columns, $key, null);
    }

    public function isFilterActive(): bool
    {
        foreach ($this->filters as $filter) {
            $currVal = Arrays::get($this->stateStorage->getFilterValues(), $filter->getName(), null);
            if (is_array($filter->getDefaultValue()) && ($filter->getDefaultValue() != $currVal)) {
                return true;
            } else if (is_scalar($filter->getDefaultValue()) && strval($filter->getDefaultValue()) !== strval($currVal)) {
                return true;
            }
        }
        return false;
    }

    public function resetFilters(): void
    {
        $this->stateStorage->resetFilters();
        foreach ($this->filters as $filter) {
            $this->stateStorage->setFilterValue($filter->getName(), $filter->getDefaultValue());
        }
    }

    public function setPageLimit(int $count): self
    {
        $this->paginator->setItemsPerPage($count);
        return $this;
    }

    /**
     * Požadavky z GETu (=osekané o nejnutnější věci) + z AJAX GETu (zahrnující akce filtrů, rozšíření, nastavení sloupců atd.)
     * Přijímat tady nějaký definovaný formát? Případně rozdílů na úrovni HTTP komunikace na něj v PresenterGrid přemapovat?
     */
    public function processRequest(array $data): RequestStateResult
    {
        $action = Arrays::get($data, 'action');

        if ($action === 'resetFilter')
        {
            $this->resetFilters();
        }
        else if ($action === 'submit' || !$action)
        {
            if (array_key_exists('sortOrder', $data)) {
                $this->stateStorage->setSortOrder($data['sortOrder']);
            }
            if (Arrays::get($data, 'sortBy', null) && $this->getColumnByKey($data['sortBy'])) {
                $this->stateStorage->setSortBy($data['sortBy']);
            }
            if (array_key_exists('page', $data) && Validators::isNumericInt($data['page'])) {
                $this->paginator->setPage((int)$data['page']);
            }
            if (array_key_exists('defaultPageSize', $data)) {
                $this->paginator->setItemsPerPage((int)$data['defaultPageSize']);
            }

            $filterData = ArrayCollection::from(Arrays::get($data, 'filters', []))
                ->mapToKeyValue(fn(int $key, array $value): array => [
                    $value['name'],
                    $value['value']
                ])
                ->toArray();
            foreach ($this->filters as $filter) {
                $value = null;
                if (array_key_exists($filter->getName(), $filterData)
                    && (!($filter instanceof FilterValidableValue)
                        || $filter->isValueValid($filterData[$filter->getName()]))
                ) {
                    $value = $filterData[$filter->getName()];
                } else {
                    $value = $filter->getDefaultValue();
                }
                $this->stateStorage->setFilterValue($filter->getName(), $value);
            }
        }
        else
        {
            foreach ($this->filters as $filter) {
                if ($filter instanceof RequestAction) {
                    $data = $filter->onRequestAction($action, $data);
                }
            }
            foreach ($this->extensions as $ext) {
                if ($ext instanceof RequestAction) {
                    $data = $ext->onRequestAction($action, $data);
                }
            }

            return new ActionStateResult($data);
        }

        return $this->getFullState();
    }

    private function computeState(): FullStateResult
    {
        $totalCount = $this->dataSource->getCount();
        $this->paginator->setItemCount($totalCount);

        $this->dataSource->setLimit($this->paginator->getItemsPerPage(), $this->paginator->getOffset());
        $this->dataSource->setFilters(Arrays::map($this->filters, fn(Filter $filter) => [
            'filter' => $filter,
            'value' => Arrays::get($this->stateStorage->getFilterValues(), $filter->getName(), $filter->getDefaultValue())
        ]));
        if ($this->stateStorage->getSortBy() !== null) {
            $this->dataSource->setSort([
                $this->getColumnByKey($this->stateStorage->getSortBy())->getColumn(),
                $this->stateStorage->getSortOrder()
            ]);
        }

        $rows = [];
        $dataRows = $this->dataSource->getData();

        foreach ($dataRows as $record) {
            $row = [];
            foreach ($this->columns as $col) {
                if ($col instanceof ColumnHtml) {
                    $row[$col->getPrefix().$col->getKey()] = (string)$col->getValue($record);
                } else {
                    $val = $this->propAccess->getValue($record, /*GridUtils::cutDotPrefix*/($col->getColumn()));
                    $row[$col->getKey()] = $val;
                }
            }
            $rows[] = $row;
        }

        $return = Arrays::toObject([
            'name' => $this->name,
            'action' => null,
            'sortBy' => $this->stateStorage->getSortBy(),
            'sortOrder' => $this->stateStorage->getSortOrder(),
            'totalCount' => $totalCount,
            'pageCount' => $this->paginator->getPageCount(),
            'page' => $this->paginator->getPage(),
            'pageSizeOptions' => $this->pageSizeOptions,
            'defaultPageSize' => $this->paginator->getItemsPerPage(),
            'pages' => $this->paginator->getPageCount(),
            'isFirst' => $this->paginator->isFirst(),
            'isLast' => $this->paginator->isLast(),
            'isFilterActive' => $this->isFilterActive(),
            'filters' => (new ArrayCollection($this->filters))
                ->map(function (Filter $filter) {
                    $state = $filter->toState();
                    if (array_key_exists($filter->getName(), $this->stateStorage->getFilterValues())) {
                        $state['value'] = Arrays::get($this->stateStorage->getFilterValues(), $filter->getName());
                    }
                    return $state;
                })
                ->getValues(),
            'columns' => (new ArrayCollection($this->columns))
                ->map(fn(Column $col) => $col->toState())
                ->getValues(),
            'rows' => $rows,
        ], new FullStateResult());

        foreach ($this->onCreate as $func) {
            $return = $func($return);
        }

        return $return;//->toArray();
    }

    public function getFullState(): FullStateResult
    {
        if ($this->computedState === null) {
            $this->computedState = $this->computeState();
        }
        return $this->computedState;
    }
}
