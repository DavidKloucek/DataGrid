<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use DemoApp\Model\DataGrid\Interfaces\Filter;

class FilterStatus implements Filter
{
    protected array $options = [];

    public function __construct(private readonly string $key)
    {
    }

    public function getName(): string
    {
        return $this->key;
    }

    public function setDefaultValue($value): self
    {
        return $this;
    }

    public function setOptions(array $options): self
    {
        $this->options = $options;
        return $this;
    }

    public function getValue(): mixed
    {
    }

    public function toState(): array
    {
    }

    public function getDefaultValue(): mixed
    {
    }
}
