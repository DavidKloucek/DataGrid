<?php declare(strict_types=1);

namespace DemoApp\Model\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Tag
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column(type: Types::INTEGER)]
    private int $id;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $isMain = true;

    #[ORM\ManyToOne(targetEntity: Post::class, inversedBy: 'post')]
    private Post $post;

    public function isMain(): bool
    {
        return $this->isMain;
    }
}
