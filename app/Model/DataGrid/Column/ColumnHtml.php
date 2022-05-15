<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

use Closure;

class ColumnHtml extends BaseColumn
{
    protected ?Closure $onRenderCallback = null;

    protected string $prefix = '__html_';

    protected string $type = 'html';

    protected string $align = 'left';

    final const ALIGN_CENTER = 'center';
    final const ALIGN_LEFT = 'left';
    final const ALIGN_RIGHT = 'right';

    public function setAlign(string $align): self
    {
        $this->align = $align;
        return $this;
    }

    public function setCallback(callable $func): self
    {
        $this->onRenderCallback = Closure::fromCallable($func);
        return $this;
    }

    public function setTemplate(string $file, array $vars): self
    {
        return $this;
    }

    /**
     * @var mixed
     */
    public function getValue($row)
    {
        $func = $this->onRenderCallback;
        return call_user_func($func, $row);
    }

    public function setPrefix(string $prefix): self
    {
        $this->prefix = $prefix;
        return $this;
    }

    public function getPrefix(): string
    {
        return $this->prefix;
    }

    public function toState(): array
    {
        return array_merge(parent::toState(), [
            'prefix' => $this->prefix,
            'align' => $this->align
        ]);
    }
}
