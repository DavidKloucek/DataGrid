<?php declare(strict_types=1);

namespace DemoApp\Model\Orm;

use Nettrine\ORM\EntityManagerDecorator;

abstract class BaseRepository
{
    public function __construct(protected readonly EntityManagerDecorator $em)
    {
    }
}
