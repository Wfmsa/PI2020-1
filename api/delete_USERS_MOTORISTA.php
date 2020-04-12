<?php
include __DIR__.'/../control/USERS_MOTORISTAControl.php';
 
$data = file_get_contents('php://input');
$obj =  json_decode($data);
//echo $obj->titulo;

$id = $obj->id;

if(!empty($data)){	
 $USERS_MOTORISTAControl = new USERS_MOTORISTAControl();
 $USERS_MOTORISTAControl->delete($obj,$id);
 header('Location:listar.php');
}



?>