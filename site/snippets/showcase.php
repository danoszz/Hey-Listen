<?php

$projects = page('projects')->children()->visible();

if(isset($limit)) $projects = $projects->limit($limit);

?>
<main class="main ip-main" role="main">
  <div class="flexgrid">
  <?php foreach($projects as $project): ?>


        <div class="grid-item--flex grid-item--flex__music music-player ">
          <div class="player">
            <div class="iframe--wrapper"><?= $project->featured_video()->oembed([
              'lazyvideo' => true
            ]) ?>
            </div>
            <div class="info--section">
              <h3><?= $project->title()->html() ?></h3>
              <?php foreach($project->category()->split('//') as $tag): ?>
              <p><?php echo $tag ?></p>
              <?php endforeach ?>
<!--
              <p><?= $project->category()->html() ?></p> -->
            </div>
          </div>
        </div>

  <?php endforeach ?>
</div>
</main>
