<?php
include __DIR__.'/../control/USERS_MOTORISTAControl.php';
$USERS_MOTORISTAControl = new USERS_MOTORISTAControl();

header('Content-Type: application/json');

if ($USERS_MOTORISTAControl->findAll()) {
	http_response_code(200);
	echo json_encode($USERS_MOTORISTAControl->findAll());


}
else {
	http_response_code(400);
	echo json_encode(array("mensagem" => "Não encontrado"));
}
?>