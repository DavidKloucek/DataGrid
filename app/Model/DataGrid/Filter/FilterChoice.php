<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Filter;

use DemoApp\Model\DataGrid\Interfaces\Filter;
use DemoApp\Model\DataGrid\Interfaces\FilterValidableValue;
use Nette\PhpGenerator\Closure;

abstract class FilterChoice implements Filter, FilterValidableValue
{
    protected bool $isMulti = false;

    protected mixed $defaultValue = null;

    protected ?Closure $onValidate = null;

    public function __construct(protected string $key, protected ?string $label = null, protected array $options = [])
    {
        return $this;
    }

    public function getName(): string
    {
        return $this->key;
    }

    public function enableMulti(bool $multi = true): self
    {
        $this->isMulti = $multi;
        return $this;
    }

    public function setOptions(array $options): self
    {
        $this->options = $options;
        return $this;
    }

    public function setDefaultValue(?string $value): self
    {
        $this->defaultValue = $value;
        return $this;
    }

    public function getDefaultValue(): mixed
    {
        return $this->defaultValue;
    }

    public function onValidateValue(?callable $callback): self
    {
        $this->onValidate = $callback;
        return $this;
    }

    public function isValueValid($value): bool
    {
        if (is_callable($this->onValidate)) {
            return ($this->onValidate)($value);
        } else {
            if (!array_key_exists($value, $this->options)) {
                return false;
            }
            return true;
        }
    }
}
