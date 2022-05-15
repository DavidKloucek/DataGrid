<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

use DemoApp\Model\DataGrid\Interfaces\Column;

abstract class BaseColumn implements Column
{
    protected bool $isFilterable = false;

    protected bool $isEditable = false;

    protected bool $isSortable = false;

    protected bool $isVisible = true;

    protected string $type = '';

    protected ?string $column = null;

    public function __construct(protected string $key, protected string $label = '')
    {
        return $this;
    }

    public function setFiltrable(bool $yes): self
    {
        $this->isFilterable = $yes;
        return $this;
    }

    public function setLabel(string $name): self
    {
        $this->label = $name;
        return $this;
    }

    public function setColumn(string $col): self
    {
        $this->column = $col;
        return $this;
    }

    public function getColumn(): ?string
    {
        return $this->column ?? $this->key;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function setSortable(bool $isSortable): self
    {
        $this->isSortable = $isSortable;
        return $this;
    }

    public function getIsSortable(): bool
    {
        return $this->isSortable;
    }

    public function getIsEditable(): bool
    {
        return $this->isEditable;
    }

    public function setIsVisible(bool $true): self
    {
        $this->isVisible = $true;
        return $this;
    }

    public function getIsVisible(): bool
    {
        return $this->isVisible;
    }

    public function setEditable(bool $isEditable): self
    {
        $this->isEditable = $isEditable;
        return $this;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    function toState(): array
    {
        return [
            'isSortable' => $this->isSortable,
            'isVisible' => $this->isVisible,
            'name' => $this->key,
            'label' => $this->label,
            'type' => $this->type
        ];
    }
}
