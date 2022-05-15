<?php declare(strict_types=1);

namespace DemoApp\Model\DataGrid\Storage;

use Nette\Http\Session;
use Nette\Http\SessionSection;

class GridStorageFactory
{
    private SessionSection $sessionSection;

    public function __construct(private readonly Session $session)
    {
    }

    public function createNonPersistentStorage(): NonPersistentStorage
    {
        return new NonPersistentStorage();
    }

    public function createSessionStorage(string $name): SessionStorage
    {
        return new SessionStorage($this->session->getSection($name));
    }
}
