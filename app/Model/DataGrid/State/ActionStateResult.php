<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\State;

class ActionStateResult extends BaseRequestStateResult implements RequestStateResult
{
    public array $filters;
}
