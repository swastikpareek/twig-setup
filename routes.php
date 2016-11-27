<?php
  $egs = array(
    array('Simple Example','examples/simple'),
    array('Filter Example','examples/filter'),
    array('Loop Example','examples/loop'),
  );
  $routes = array(
    '/' => array('home', array('examples' => $egs)),
    '/contact' => array('contact'),
    '/examples/simple' => array('examples/simple', array(
      'user' => (object) array(
        'items' => array('You', 'Look' , 'Smart', 'Today!'),
        'gender' => 'male',
        'name' => array(
          'first' => 'Swastik',
          'last' => 'Pareek',
        ),
      ),
    )),
    '/examples/filter' => array('examples/filter',array(
      'user' => array(
        'name' => 'superman'
        )
      )
    ),
    '/examples/loop' => array('examples/loop' ,array('items' => array('Coffee <strong> is </strong> hot', 'Superman <script> alert("hi"); </script>', 'Twig', 'Rubber', 'Letter'))),
  );
?>
