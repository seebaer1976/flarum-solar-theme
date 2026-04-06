<?php

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/resources/less/forum.less')
        ->js(__DIR__.'/resources/js/forum.js'),

    (new Extend\Frontend('admin'))
        ->css(__DIR__.'/resources/less/forum.less')
        ->js(__DIR__.'/resources/js/admin.js'),
];
