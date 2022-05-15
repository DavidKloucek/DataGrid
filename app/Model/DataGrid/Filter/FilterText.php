<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use DemoApp\Model\DataGrid\Interfaces\Filter;

class FilterText implements Filter
{
    private string $defaultValue = '';

    private array $attrs;

    private ?string $placeholder = null;

    public function __construct(private readonly string $key, private ?string $label)
    {
        return $this;
    }

    public function getName(): string
    {
        return $this->key;
    }

    public function setDefaultValue(string $value): self
    {
        $this->defaultValue = $value;
        return $this;
    }

    public function setControlClass(string $className): self
    {
        $this->attrs['controlClassName'] = $className;
        return $this;
    }

    public function setLabelClass(string $className): self
    {
        $this->attrs['labelClassName'] = $className;
        return $this;
    }

    public function getDefaultValue(): string
    {
        return $this->defaultValue;
    }

    public function setPlaceholder(?string $placeholder): self
    {
        $this->placeholder = $placeholder;
        return $this;
    }

    public function toState(): array
    {
        return [
            'name' => $this->key,
            'label' => $this->label,
            'value' => $this->defaultValue,
            'placeholder' => $this->placeholder,
            'type' => 'FilterText'
        ] + $this->attrs;
    }

    public function getValue(): mixed
    {
        return $this->defaultValue;
    }
}
