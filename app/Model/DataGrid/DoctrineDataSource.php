<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid;

use DemoApp\Model\DataGrid\Filter\FilterRadio;
use DemoApp\Model\DataGrid\Filter\FilterText;
use DemoApp\Model\DataGrid\Interfaces\DataSource;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;

class DoctrineDataSource implements DataSource
{
    protected Paginator $paginator;

    protected int $limit;

    protected int $offset;

    public function __construct(protected QueryBuilder $query)
    {
    }

    public function getCount(): int
    {
        $this->paginator = new Paginator($this->query, true);
        return $this->paginator->count();
    }

    public function getData(): array
    {
        $paginator = (new Paginator($this->query, true));
        $paginator->getQuery()
            ->setFirstResult($this->offset)
            ->setMaxResults($this->limit);

        return iterator_to_array($paginator->getIterator());
    }

    public function setSort(array $sort): void
    {
        $alias = $this->query->getRootAliases()[0];
        $this->query->orderBy("$alias.".$sort[0], $sort[1]);
    }

    public function setLimit(int $limit, int $offset): void
    {
        $this->limit = $limit;
        $this->offset = $offset;
    }

    public function setFilters(array $filters): void
    {
        foreach ($filters as $filter) {
            if ($filter['filter'] instanceof FilterText) {
                $this->setFilterText($filter['filter'], $filter['value']);
            } else if ($filter['filter'] instanceof FilterRadio) {
                $this->setFilterRadio($filter['filter'], $filter['value']);
            }
        }
    }

    protected function setFilterText(FilterText $filter, mixed $value): void
    {
        if ($filter->getName() === 'search' && $value !== '') {
            //$this->query->where('pl.name LIKE %~like~', $value);
        }
    }

    protected function setFilterRadio(FilterRadio $filter, mixed $value): void
    {
        if ($value !== '') {
            $this->query->where('p.'.$filter->getName().'=?1')
                ->setParameter(1, $value);
            //$this->query->where('p.%n=%s', $filter->getName(), $value);
        }
    }
}
