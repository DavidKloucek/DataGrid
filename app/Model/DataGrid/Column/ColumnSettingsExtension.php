<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

use DemoApp\Model\DataGrid\Grid;
use DemoApp\Model\DataGrid\Interfaces\Extension;
use DemoApp\Model\DataGrid\Interfaces\RequestAction;
use Tracy\Debugger;

class ColumnSettingsExtension implements Extension, RequestAction
{
    protected ?Grid $grid = null;

    public function onRequestAction(string $action, array $data): array
    {
        if ($action === 'column.settings') {
            //$this->grid->setColumnOrder($data);
        }

        return $data;
    }

    public function onAttached(Grid $grid): void
    {
        $this->grid = $grid;
    }
}
