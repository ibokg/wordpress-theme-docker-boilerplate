<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Theme</title>
  <?php wp_head(); ?>
</head>
  <body <?php body_class('l-page'); ?>>
    <header class="l-page__header l-header"></header>
    <main class="l-page__content"></main>
    <footer class="l-page__footer l-footer"></footer>
  </body>
</html>
