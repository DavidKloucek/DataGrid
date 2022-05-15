<?php declare(strict_types=1);

namespace DemoApp\Model;

use DemoApp\Model\Author\AuthorRepository;
use DemoApp\Model\DataGrid\Filter\LazySelectFilter;
use DemoApp\Model\Entity\Author;
use DemoApp\Model\Utils\Arrays\Arrays;

class GridFilterAuthorSelectFactory
{
    public function __construct(private readonly AuthorRepository $authorRepository)
    {
    }

    public function create(string $name): LazySelectFilter
    {
        return (new LazySelectFilter($name))
            ->setFetchOnce(true)
            ->setDefaultOptions([])
            ->setOnFetchOptions(fn(array $state): array => Arrays::mapList($this->authorRepository->findAuthors(), fn(Author $author): array => ['value' => $author->getId(), 'label' => $author->getName()]))
            ->onValidateValue(fn($model): bool => true);
    }
}
