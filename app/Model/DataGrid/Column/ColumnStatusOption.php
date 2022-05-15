<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

class ColumnStatusOption// implements \App\Model\DataGrid\Column
{
    protected ?string $label = null;

    public function __construct(protected ColumnStatus $column)
    {
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;
        return $this;
    }

    public function endOption(): ColumnStatus
    {
        return $this->column;
    }
}
