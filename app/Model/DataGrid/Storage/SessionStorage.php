<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Storage;

use DemoApp\Model\DataGrid\Exception\NotImplementedYetException;
use DemoApp\Model\DataGrid\Interfaces\GridStorage;
use Nette\Http\SessionSection;

class SessionStorage implements GridStorage
{
    protected string $name;

    protected array $filters = [];

    protected array $columns = [];

    protected ?int $defaultPageSize = null;

    protected ?int $page = null;

    protected ?string $sortOrder = null;

    protected ?string $sortBy = null;

    public function __construct(private readonly SessionSection $data)
    {
        $this->data->warnOnUndefined = true;

        if (!isset($this->data->init)) {
            $this->data->init = true;
            $this->data->filters = [];
            $this->data->sortBy = null;
            $this->data->sortOrder = null;
        }
    }

    public function resetFilters(): void
    {
        $this->data->set('filters', []);
    }

    public function getFilterValues(): array
    {
        return $this->data->filters;
    }

    public function setSortOrder(?string $value): void
    {
        $this->data->set('sortOrder', $value);
    }

    public function setSortBy(string $sort): void
    {
        $this->data->set('sortBy', $sort);
    }

    public function setFilterValue(string $name, $value): void
    {
        $this->data->filters[$name] = $value;
    }

    public function getSortBy(): ?string
    {
        return $this->data->sortBy;
    }

    public function getSortOrder(): ?string
    {
        return $this->data->sortOrder;
    }

    public function writeValue(string $key, mixed $value): void
    {
        throw new NotImplementedYetException();
    }

    public function readValue(string $key, $default = null): never
    {
        throw new NotImplementedYetException();
    }
}
