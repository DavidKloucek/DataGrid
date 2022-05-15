<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use Closure;
use DemoApp\Model\DataGrid\Interfaces\Filter;
use DemoApp\Model\DataGrid\Interfaces\FilterValidableValue;
use DemoApp\Model\DataGrid\Interfaces\RequestAction;
use DemoApp\Model\Utils\Arrays\ArrayCollection;

class LazySelectFilter implements FilterValidableValue, Filter, RequestAction
{
    private ?Closure $onFetchOptions = null;

    private ?string $placeholder = null;

    private array $defaultOptions = [];

    public function __construct(private readonly string $name, private ?string $label = null)
    {
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getDefaultValue(): array
    {
        return $this->defaultOptions;
    }

    public function setPlaceholder(?string $text): self
    {
        $this->placeholder = $text;
        return $this;
    }

    public function setTransferRows(bool $allow = true): self
    {
        return $this;
    }

    public function setDefaultOptions(array $options): self
    {
        $this->defaultOptions = $options;
        return $this;
    }

    public function setOnFetchOptions(callable $func): self
    {
        $this->onFetchOptions = Closure::fromCallable($func);
        return $this;
    }

    public function setFetchOnce(bool $once = true): self
    {
        return $this;
    }

    public function setOnChangeValue($value): self
    {
        return $this;
    }

    public function onValidateValue(callable $func): self
    {
        return $this;
    }

    public function isValueValid($value): bool
    {
        return true;
    }

    public function onRequestAction(string $action, array $data): array
    {
        if ($action === $this->getName().'.load' && is_callable($this->onFetchOptions)) {
            $data['filters'] = ArrayCollection::from($data['filters'])
                ->map(function ($filter) use ($data) {
                    if ($filter['name'] === $this->getName()) {
                        $filter['options'] = call_user_func($this->onFetchOptions, $data);
                        $filter['isLoaded'] = true;
                    }
                    return $filter;
                })
                ->getValues();
        }
        return $data;
    }

    public function toState(): array
    {
        return [
            'name' => $this->name,
            'type' => 'LazySelectFilter',
            'placeholder' => $this->placeholder,
            'options' => $this->defaultOptions,
            'value' => $this->defaultOptions,
            'label' => $this->label,
            'loadOnce' => true,
            'isLoaded' => false
        ];
    }
}
