<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid;

class GridUtils
{
    public static function cutDotPrefix(string $s): string
    {
        $ex = explode('.', $s);
        return $ex[count($ex)-1];
    }
}
