<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <meta name="keywords" content="<?= $site->kewords()->html() ?>">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Hey!Listen">
  <meta property="og:url" content="https://heylisten.nl">
  <meta property="og:image" content="https://heylisten.nl/assets/images/heylisten-shareimage_fb.png">

  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://heylisten.nl/assets/images/favicon/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="https://heylisten.nl/assets/images/favicon/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="https://heylisten.nl/assets/images/favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="https://heylisten.nl/assets/images/favicon/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="https://heylisten.nl/assets/images/favicon/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="https://heylisten.nl/assets/images/favicon/favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="https://heylisten.nl/assets/images/favicon/mstile-144x144.png" />
  <meta name="msapplication-square70x70logo" content="https://heylisten.nl/assets/images/favicon/mstile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="https://heylisten.nl/assets/images/favicon/mstile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="https://heylisten.nl/assets/images/favicon/mstile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="https://heylisten.nl/assets/images/favicon/mstile-310x310.png" />


  <?= css('assets/plugins/oembed/css/oembed.css') ?>
  <?= css('assets/css/styles.min.css') ?>
  <?= js('assets/js/vendor/modernizr.custom.js') ?>

</head>
<body>

<?php snippet('preloader') ?>
<?php snippet('menu') ?>
