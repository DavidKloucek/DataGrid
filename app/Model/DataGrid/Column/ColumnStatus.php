<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Column;

class ColumnStatus extends BaseColumn
{
    protected string $type = 'status';

    /**
     * @var ColumnStatusOption[]
     */
    protected array $options = [];

    public function addOption(string $key, string $label): ColumnStatusOption
    {
        $opt = new ColumnStatusOption($this);
        $opt->setLabel($label);
        $this->options[] = $opt;
        return $opt;
    }
}
