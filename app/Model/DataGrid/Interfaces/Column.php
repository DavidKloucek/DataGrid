<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface Column
{
    public function getKey(): string;

    public function toState(): array;
}
