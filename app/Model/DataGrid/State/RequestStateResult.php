<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\State;

interface RequestStateResult
{
    public function toArray(): array;
}
