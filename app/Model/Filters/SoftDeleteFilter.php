<?php declare(strict_types=1);

namespace DemoApp\Model\Filters;

use Doctrine\ORM\Mapping\ClassMetaData;
use Doctrine\ORM\Query\Filter\SQLFilter;

class SoftDeleteFilter extends SQLFilter
{
    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias): string
    {
        if ($targetEntity->hasField("isDeleted")) {
            return $targetTableAlias.".is_deleted=0";
        }
        return '';
    }
}
