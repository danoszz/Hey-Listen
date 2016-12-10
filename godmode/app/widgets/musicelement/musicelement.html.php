<div class="dashboard-box">
  <?php

  $projects = page('projects')->children()->visible();

  if(isset($limit)) $projects = $projects->limit($limit);

  ?>

  <?php if(empty($projects)): ?>
  <div class="text"><p>No music elements yet, add some above</p></div>
  <?php else: ?>
  <ul class="dashboard-items">
    <?php foreach($projects as $project): ?>
    <li class="dashboard-item">
      <a title="<?php __($project->title()) ?>" href="<?php __($project->url('edit')) ?>">
        <figure>
          <span class="dashboard-item-icon dashboard-item-icon-with-border"><i class="fa fa-music"></i></span>
          <figcaption class="dashboard-item-text"><?= $project->title()->html() ?></figcaption>
        </figure>
      </a>
    </li>
    <?php endforeach ?>
  </ul>
  <?php endif ?>
</div>
