<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Presenter;

use DemoApp\Model\DataGrid\Exception\GridException;
use DemoApp\Model\DataGrid\Grid;
use Nette\Application\UI\Control;
use Nette\Application\UI\Presenter;
use Nette\Utils\Json;

/**
 * Dekorátor?
 *
 * Nebylo by lepší sestavovat URL ze storage než z výsledného stavu?
 */
class PresenterGrid extends Control
{
    protected Grid $grid;

    protected string $name;

    public function __construct(?string $name = null)
    {
        if ($name === null) {
            $name = $this->createComponentName();
        }
        $this->name = $name;
        $this->grid = new Grid($name);

        $this->monitor(Presenter::class, function (Presenter $presenter): void {
        });
    }

    public function getState(): PresenterFullStateResult
    {
        $state = new PresenterFullStateResult($this->grid->getFullState()->toArray());
        $state->baseUrl = $this->link('filter!').'&'.$this->getName().'-state=';
        $state->url = $this->createUrl($state->toArray());
        return $state;
    }

    protected function createUrl(array $state): string
    {
        unset($state['columns']);
        unset($state['rows']);
        return $this->link('filter!', [
            'state' => Json::encode($state)
        ]);
    }

    public function getGrid(): Grid
    {
        return $this->grid;
    }

    public function handleFilter(?string $state = null): void
    {
        $state = $this->grid->processRequest($state ? Json::decode($state, Json::FORCE_ARRAY) : []);

        if ($this->getPresenter()->isAjax()) {
            $this->getPresenter()->sendJson([
                'state' => $state
            ]);
        }
    }

    protected function createComponentName(): string
    {
        if ($this->getPresenter() === null) {
            throw new GridException();
        }
        return $this->getPresenter()->getName().':'.$this->getUniqueId();
    }
}
