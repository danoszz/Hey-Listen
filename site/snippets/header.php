<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <meta name="keywords" content="<?= $site->kewords()->html() ?>">

  <?= css('assets/plugins/oembed/css/oembed.css') ?>
  <?= css('assets/css/styles.min.css') ?>
  <?= js('assets/js/vendor/modernizr.custom.js') ?>

</head>
<body>

<?php snippet('preloader') ?>
<?php snippet('menu') ?>
