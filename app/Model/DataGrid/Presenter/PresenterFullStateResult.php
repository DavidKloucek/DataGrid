<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Presenter;

use DemoApp\Model\DataGrid\State\FullStateResult;
use DemoApp\Model\DataGrid\State\RequestStateResult;

class PresenterFullStateResult extends FullStateResult implements RequestStateResult
{
    public string $url;

    public string $baseUrl;
}
