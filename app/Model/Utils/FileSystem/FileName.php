<?php declare(strict_types=1);

namespace DemoApp\Model\Utils\FileSystem;

use Nette\Utils\Strings;

class FileName
{
    private string $name;

    private string $suffix;

    public function __construct(string $fn)
    {
        $info = pathinfo($fn);
        $this->name = $info['filename'];
        $this->suffix = $info['extension'] ?? '';
    }

    public static function withRequiredExtension(string $filename): self
    {
        $item = new self($filename);
        if ($item->getExtension() === '') {
            throw new FileNameException();
        }
        return $item;
    }

    public function setName(string $name): void
    {
        $name = Strings::trim($name);
        if ($name === '') {
            throw new FileNameException("Name must not be empty");
        }
        $this->name = $name;
    }

    public function setSuffix(string $suffix): void
    {
        $this->suffix = $suffix;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getExtension(): string
    {
        return $this->suffix;
    }

    public function getFullName(): string
    {
        return $this->__toString();
    }

    public function __toString(): string
    {
        return $this->name.($this->suffix !== '' ? ".{$this->suffix}" : '');
    }
}
