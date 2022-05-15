<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\State;

abstract class BaseRequestStateResult implements RequestStateResult
{
    public function __construct(array $args = [])
    {
        foreach ($args as $k => $v) {
            $this->{$k} = $v;
        }
    }

    public function toArray(): array
    {
        $return = [];
        foreach (get_object_vars($this) as $k => $v) {
            $return[$k] = $v;
        }
        return $return;
    }
}
