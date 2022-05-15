<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

use DemoApp\Model\DataGrid\Grid;

interface Extension
{
    public function onAttached(Grid $grid): void;
}
