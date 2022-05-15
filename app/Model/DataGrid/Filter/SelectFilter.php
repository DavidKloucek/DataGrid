<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use DemoApp\Router\Utils\ArrayCollection;
use DemoApp\Model\DataGrid\Filter\FilterChoice;

class SelectFilter extends FilterChoice
{
    protected bool $allowCreateOption;

    public function setAllowCreateOption(bool $allowed = true): self
    {
        $this->allowCreateOption = $allowed;
        return $this;
    }
    
    public function toState(): array
    {
        return [
            'name' => $this->key,
            'label' => $this->label,
            'value' => null,
            'defaultValue' => $this->defaultValue,
            'options' => ArrayCollection::from($this->options)
                ->map(fn($val, $key) => [$key, $val])
                ->getValues(),
            'type' => 'FilterSelect'
        ];
    }

    public function getValue(): mixed
    {
    }
}
