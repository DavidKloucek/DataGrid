<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Interfaces;

interface Filter
{
    public function getName(): string;

    //public function getValue(): mixed;

    //public function validateValue($value): bool;

    //public function onValidateValue($value);

    public function toState(): array;

    public function getDefaultValue(): mixed;
}
