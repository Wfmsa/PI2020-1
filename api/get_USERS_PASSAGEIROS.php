<?php
header("Access-Control-Allow-Origin: *");
include __DIR__.'/../control/USERS_PASSAGEIROSControl.php';
$USERS_PASSAGEIROSControl = new USERS_PASSAGEIROSControl();

header('Content-type: application/json');

if ($USERS_PASSAGEIROSControl->findAll()) {
	http_response_code(200);
	echo json_encode($USERS_PASSAGEIROSControl->findAll());


}
else {
	http_response_code(400);
	echo json_encode(array("mensagem" => "Não encontrado"));
}
?>