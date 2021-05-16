<?php

// Remove Unnecessary Code from wp_head
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'start_post_rel_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'adjacent_posts_rel_link');

function theme_support() {
  // Adds dynamic title tag support
  add_theme_support( 'title-tag' );
}

add_action('after_setup_theme', 'theme_support');

function get_manifest_file($filename, $manifestPath = null) {
	// Set the default path if one isn't provided.
	if (is_null($manifestPath)) {
		$manifestPath = __DIR__ . '/dist/manifest.json';
	}

	// Check the file exists before we try to load it.
	if (!file_exists($manifestPath)) {
		return new \WP_Error('manifest', 'The Manifest file can not be found.', $manifestPath);
	}

	$manifest = json_decode(file_get_contents($manifestPath), true);

	// Attempt to match the requested file.
	if (!array_key_exists($filename, $manifest)) {
		return new \WP_Error('manifest', 'The requested file could not be matched.', $filename);
	}

	return $manifest[$filename];
}

function enqueue_js() {
	wp_enqueue_script('runtime', get_template_directory_uri() . get_manifest_file( 'runtime.js' ), [], '1.0.0', true);
	wp_enqueue_script('index', get_template_directory_uri() . get_manifest_file( 'index.js' ), [], '1.0.0', true);
}

function enqueue_css() {
	wp_enqueue_style('styles', get_template_directory_uri() . get_manifest_file( 'index.css' ), [], '1.0.0');
}

add_action('wp_enqueue_scripts', 'enqueue_js');
add_action('wp_enqueue_scripts', 'enqueue_css');

?>
