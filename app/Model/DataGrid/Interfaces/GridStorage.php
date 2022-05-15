<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface GridStorage
{
    public function resetFilters(): void;

    public function getFilterValues(): array;

    public function setSortOrder(?string $value): void;

    public function setSortBy(string $sort): void;

    public function setFilterValue(string $name, mixed $value): void;

    public function getSortBy(): ?string;

    public function getSortOrder(): ?string;

    public function writeValue(string $key, mixed $value): void;

    public function readValue(string $key, $default = null): mixed;
}
