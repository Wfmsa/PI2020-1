<?php
include __DIR__.'/../control/cacambaControl.php';
$cacambaControl = new CacambaControl();

header('Content-Type: application/json');

if ($cacambaControl->findAll()) {
	http_response_code(200);
	echo json_encode($cacambaControl->findAll());


}
else {
	http_response_code(400);
	echo json_encode(array("mensagem" => "Não encontrado"));
}
?>