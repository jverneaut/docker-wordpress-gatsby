<?php

define('THEME_URL', get_bloginfo('template_url'));
define('IMG_URL', THEME_URL . '/img');

function load_scripts_styles()
{
  wp_enqueue_script('theme-js', THEME_URL . '/dist/bundle.js', null, null, true);
  wp_enqueue_style('theme-css', THEME_URL . '/dist/style.css');
}

add_action('wp_enqueue_scripts', 'load_scripts_styles');


function setup_theme()
{
  add_theme_support('title-tag');
}

add_action('after_setup_theme', 'setup_theme');
