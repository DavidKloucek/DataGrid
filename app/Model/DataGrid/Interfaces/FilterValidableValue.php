<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface FilterValidableValue
{
    public function isValueValid($value): bool;
}
