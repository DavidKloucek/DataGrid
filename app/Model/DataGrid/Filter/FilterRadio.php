<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use DemoApp\Model\Utils\Arrays\ArrayCollection;

class FilterRadio extends FilterChoice
{
    public function toState(): array
    {
        return [
            'name' => $this->key,
            'label' => $this->label,
            'value' => strval($this->defaultValue),
            'options' => ArrayCollection::from($this->options)
                ->map(fn($val, $key) => [strval($key), strval($val)])
                ->getValues(),
            'type' => 'FilterRadio'
        ];
    }
}
