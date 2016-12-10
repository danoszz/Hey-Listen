<?php

$site    = panel()->site();
$options = array();
$projects = panel()->page('projects');

if($site->canHaveSubpages()) {
  $options[] = array(
    'text' => l('dashboard.index.pages.edit'),
    'icon' => 'pencil',
    'link' => $projects->url('subpages')
  );
}

if($addbutton = $projects->addButton()) {
  $options[] = array(
    'text'  => l('dashboard.index.pages.add'),
    'icon'  => 'plus-circle',
    'link'  => $addbutton->url(),
    'modal' => $addbutton->modal(),
    'key'   => '+',
  );
}

return array(

  'title' => array(
    'text'       => 'Music elements 🔥',
    'link'       => $projects->url('subpages')
  ),
  'options' => $options,
  'html'    => function() {
    return tpl::load(__DIR__ . DS . 'musicelement.html.php');
  }
);
