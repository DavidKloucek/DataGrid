<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Storage;

use DemoApp\Model\DataGrid\Exception\NotImplementedYetException;
use DemoApp\Model\DataGrid\Interfaces\GridStorage;
use Nette\SmartObject;

class NonPersistentStorage implements GridStorage
{
    use SmartObject;

    protected string $name;

    protected array $filters = [];

    protected array $columns = [];

    protected ?int $defaultPageSize = null;

    protected ?int $page = 1;

    protected ?string $sortOrder = null;

    protected ?string $sortBy = null;

    public function __construct()
    {
    }

    public function resetFilters(): void
    {
        $this->filters = [];
    }

    public function getFilterValues(): array
    {
        return $this->filters;
    }

    public function setSortOrder(?string $value): void
    {
        $this->sortOrder = $value;
    }

    public function setSortBy(string $sort): void
    {
        $this->sortBy = $sort;
    }

    public function setFilterValue(string $name, $value): void
    {
        $this->filters[$name] = $value;
    }

    public function getSortBy(): ?string
    {
        return $this->sortBy;
    }

    public function getSortOrder(): ?string
    {
        return $this->sortOrder;
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
