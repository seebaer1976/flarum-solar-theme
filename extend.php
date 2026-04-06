<?php

namespace Seebear1976\SolarTheme;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/resources/js/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/resources/js/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
];
