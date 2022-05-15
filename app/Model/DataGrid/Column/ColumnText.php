<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

class ColumnText extends BaseColumn
{
    protected ?\Closure $onRenderCallback = null;

    protected string $align = 'left';

    protected string $type = 'text';

    final const ALIGN_CENTER = 'center';
    final const ALIGN_LEFT = 'left';
    final const ALIGN_RIGHT = 'right';

    public function setAlign(string $align): self
    {
        $this->align = $align;
        return $this;
    }

    public function toState(): array
    {
        return array_merge(parent::toState(), [
            'align' => $this->align
        ]);
    }
    /*
    public function getValue($row)
    {
        $func = $this->onRenderCallback;
        return call_user_func($func, $row);
    }
    */
    public function setRenderer(callable $func): self
    {
        $this->onRenderCallback = $func;
        return $this;
    }
}
