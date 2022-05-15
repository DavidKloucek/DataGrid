<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface RequestAction
{
    //public function getRequestActions(): array;

    public function onRequestAction(string $action, array $data): array;
}
