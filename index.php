<?php
include 'Twig/lib/Twig/Autoloader.php';
include 'routes.php';

Twig_Autoloader::register();
try {
  // specify where to look for templates
  $loader = new Twig_Loader_Filesystem('templates');

  // initialize Twig environment
  $twig = new Twig_Environment($loader, array(
      'debug' => true,
      // ...
  ));
  $twig->addExtension(new Twig_Extension_Debug());

  $uri = $_SERVER['REQUEST_URI'];

  if($routes[$uri]){
    $template = $twig->loadTemplate( 'pages/' . $routes[$uri][0] . '.html.twig');
    if(count($routes[$uri]) > 1){
      echo $template->render($routes[$uri][1]);
    }else{
      echo $template->render(array());
    }
  } else{
    // 404
    $template = $twig->loadTemplate('pages/error-404.html.twig');
    echo $template->render(array());

  }

} catch (Exception $e) {
  die ('ERROR: ' . $e->getMessage());
}
