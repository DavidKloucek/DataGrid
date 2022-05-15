<?php declare(strict_types=1);

namespace DemoApp\Presenters;

use DemoApp\Model\DataGrid\Column\ColumnHtml;
use DemoApp\Model\DataGrid\Column\ColumnSettingsExtension;
use DemoApp\Model\DataGrid\Column\ColumnStatus;
use DemoApp\Model\DataGrid\Column\ColumnText;
use DemoApp\Model\DataGrid\DoctrineDataSource;
use DemoApp\Model\DataGrid\Filter\FilterRadio;
use DemoApp\Model\DataGrid\Filter\FilterText;
use DemoApp\Model\DataGrid\Presenter\PresenterGrid;
use DemoApp\Model\Datagrid\Storage\GridStorageFactory;
use DemoApp\Model\Datagrid\Storage\NonPersistentStorage;
use DemoApp\Model\Entity\Author;
use DemoApp\Model\Entity\Post;
use DemoApp\Model\Entity\Tag;
use DemoApp\Model\GridFilterAuthorSelectFactory;
use DemoApp\Model\Post\PostRepository;
use Nette\Utils\Html;
use Nette\Utils\Json;
use Nettrine\ORM\EntityManagerDecorator;
use Tracy\Debugger;

final class PostPresenter extends BasePresenter
{
    public function __construct(
        private readonly EntityManagerDecorator $em,
        private readonly PostRepository $postRepository,
        private readonly GridStorageFactory $gridStorageFactory,
        private readonly GridFilterAuthorSelectFactory $authorSelectFactory
    ) {
        parent::__construct();
    }

    public function renderList(): void
    {
        $state = $this['list']->getState();
        Debugger::barDump($state);

        $this->getTemplate()->state = Json::encode($state);
    }

    protected function createComponentList(): PresenterGrid
    {
        $ds = new DoctrineDataSource($this->em->createQueryBuilder()
            ->select('p')
            ->from(Post::class, 'p')
        );

        $presenterGrid = new PresenterGrid('productList');

        $grid = $presenterGrid->getGrid();
        //$grid->setStorage($this->gridStorageFactory->createSessionStorage('productList'));
        $grid->setStorage(new NonPersistentStorage());
        $grid->setDataSource($ds);

        $grid->addExtension(new ColumnSettingsExtension());

        $grid->setPageLimit(10);

        ////////////

        $grid->addFilter((new FilterText('search', 'Search: '))
            ->setPlaceholder('Start typing..')
            ->setControlClass('form-control input-md')
        );

        $grid->addFilter(
            (new FilterRadio('status', null, [
                '' => 'All',
                1 => 'Active',
                0 => 'Inactive'
            ]))
                ->setDefaultValue('')
        );

        $grid->addFilter($this->authorSelectFactory->create('author')
            ->setPlaceholder('Choose author 1..')
        );

        $grid->addFilter($this->authorSelectFactory->create('author2')
            ->setPlaceholder('Choose author 2..')
        );

        /////////////////

        $grid->addColumn(
            (new ColumnText('id'))
                ->setLabel('ID')
                ->setColumn('id')
                ->setAlign('center')
                ->setSortable(true)
        );
        $grid->addColumn(
            (new ColumnHtml('name'))
                ->setLabel('Article')
                ->setColumn('name')
                ->setSortable(true)
                ->setCallback(fn(Post $post) => Html::el('strong', ['style' => 'background: LemonChiffon'])
                    ->setText($post->getName()))
        );

        $grid->addColumn((new ColumnText('author'))
            ->setColumn('author.name')
            ->setLabel('Author')
        );

        $status = new ColumnStatus('status', 'Status');
        $status->setColumn('status');
        $status->addOption('1', 'Published');
        $status->addOption('0', 'Draft');

        $grid->addColumn($status);

        /*$grid->addColumn(
            (new ColumnStatus('status'))
                ->setName('Status')
                ->setSortable(false)
                ->addOption('a', 'A')
                    ->endOption()
                ->addOption('b', 'B')
                    ->setLabel('xxx')
                    ->endOption()
        );*/

        return $presenterGrid;
    }
}
