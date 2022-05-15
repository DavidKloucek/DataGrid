<?php declare(strict_types=1);

namespace DemoApp\Model\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Criteria;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Nette\Utils\Strings;

#[ORM\Entity]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'AUTO')]
    #[ORM\Column(type: Types::INTEGER)]
    private int $id;

    #[ORM\Column(type: Types::STRING)]
    private string $name = '';

    #[ORM\Column(type: Types::STRING)]
    private string $note = '';

    #[ORM\Column(type: Types::INTEGER)]
    private int $status = self::STATUS_DRAFT;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private \DateTimeImmutable $createdAt;

    /**
     * @var Collection|Tag[]
     **/
    #[ORM\OneToMany(targetEntity: Tag::class, mappedBy: 'post', cascade: ['persist'])]
    private Collection $tags;

    #[Orm\ManyToOne(targetEntity: Author::class, inversedBy: 'posts')]
    private ?Author $author = null;

    final const STATUS_PUBLISHED = 1;
    final const STATUS_DRAFT = 0;

    public function __construct(string $name)
    {
        $this->setName($name);
        $this->tags = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getAuthor(): ?Author
    {
        return $this->author;
    }

    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $name = Strings::trim($name);
        if ($name === '') {
            throw new PostException();
        }
        $this->name = $name;
    }

    public function getStatus(): int
    {
        return $this->status;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }
}
