<?php snippet('header') ?>

  <main class="main" role="main">

    <header class="wrap">
      <h1><?= $page->title()->html() ?></h1>
      <div class="intro text">
        <?= $page->date('Y', 'year') ?>
      </div>
      <hr />
    </header>

    <div class="text wrap">

      <?= $page->text()->kirbytext() ?>

      <?= $page->featured_video()->oembed([
        'lazyvideo' => true
      ]) ?>
    </div>

  </main>

<?php snippet('footer') ?>
