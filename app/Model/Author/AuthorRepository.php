<?php declare(strict_types=1);

namespace DemoApp\Model\Author;

use DemoApp\Model\Entity\Author;
use DemoApp\Model\Orm\BaseRepository;

class AuthorRepository extends BaseRepository
{
    /**
     * @return array<int, Author>
     */
    public function findAuthors(): array
    {
        return $this->em->createQueryBuilder()
            ->select('a')
            ->from(Author::class, 'a')
            ->orderBy('a.name', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
