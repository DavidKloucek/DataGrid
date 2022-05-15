<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface DataSource
{
    public function setLimit(int $limit, int $offset): void;

    /**
     * @param Filter[] $filters
     */
    public function setFilters(array $filters): void;

    public function getCount(): int;

    public function getData(): array;

    public function setSort(array $sort): void;
}
