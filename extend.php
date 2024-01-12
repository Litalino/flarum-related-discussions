<?php

/*
 * This file is part of Litalino/flarum-related-discussions.
 *
 * Copyright (c) 2023 Litalino.
 * https://khatvongsong.vn
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Litalino\RelatedDiscussions;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;


return [
  (new Extend\Frontend('forum'))
    ->js(__DIR__ . '/js/dist/forum.js')
    ->css(__DIR__ . '/resources/less/forum.less'),
  (new Extend\Frontend('admin'))
    ->js(__DIR__ . '/js/dist/admin.js')
    ->css(__DIR__ . '/resources/less/admin.less'),

  new Extend\Locales(__DIR__ . '/resources/locale'),

  (new Extend\Settings())
    ->serializeToForum('litalino-related-discussions.enable.DiscussionPageLayout', 'litalino-related-discussions.DiscussionPageLayout', 'boolval', false),
  (new Extend\Settings())
    ->serializeToForum('litalino-related-discussions.showTooltip', 'litalino-related-discussions.showTooltip', 'boolval', false),

];
