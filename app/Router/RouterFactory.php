<?php declare(strict_types=1);

namespace DemoApp\Router;

use Nette;
use Nette\Application\Routers\Route;
use Nette\Application\Routers\RouteList;

final class RouterFactory
{
	use Nette\StaticClass;

	public static function createRouter(): Nette\Routing\Router
	{
		$router = new RouteList();
        $router->addRoute('', 'Post:list');
        $router->addRoute('<presenter>/<action>[/<id>]', 'Post:list');
		return $router;
	}
}
