<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

c::set('plugin.oembed.video.lazyload', true);
c::set('plugin.oembed.video.lazyload.btn', 'assets/plugins/oembed/images/play.png');

c::set('plugin.oembed.caching', true);
c::set('plugin.oembed.caching.duration', 24); // in hours

c::set('plugin.oembed.w3c.enforce', false);

// c::set('plugin.oembed.providers.jsapi', false);
c::set('plugin.oembed.providers.facebook.key', null);
c::set('plugin.oembed.providers.google.key', null);
// c::set('plugin.oembed.providers.soundcloud.key', null):
/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/