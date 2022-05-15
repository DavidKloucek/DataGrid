<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\State;

class FullStateResult extends BaseRequestStateResult implements RequestStateResult
{
    public string $name;

    public ?string $action = null;

    public ?string $sortBy = null;

    public ?string $orderBy = null;

    public ?string $order = null;

    public int $totalCount;

    public int $page;

    public array $pageSizeOptions;

    public int $defaultPageSize;

    public int $pages;

    public bool $isFirst;

    public bool $isLast;

    public bool $isFilterActive;

    public array $filters;

    public array $columns;

    public array $rows;
}
