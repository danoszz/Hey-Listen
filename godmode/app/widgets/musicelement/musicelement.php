<?php

$site    = panel()->site();
$options = array();
$projects = panel()->page('projects');


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
    'text'       => 'Music elements',
    'link'       => $projects->modal()
  ),
  'options' => $options,
  'html'    => function() {
    return tpl::load(__DIR__ . DS . 'musicelement.html.php', array(
      // 'history' => panel()->user()->history()->get()
    ));
  }
);
