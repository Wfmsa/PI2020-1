<?php
include __DIR__.'/../model/USERS_MOTORISTA.php';

class USERS_MOTORISTAControl{

	function insert($obj){
		$USERS_MOTORISTA = new USERS_MOTORISTA();
		//echo $obj->titulo;
		return $USERS_MOTORISTA->insert($obj);
	}

	function update($obj,$id){
		$USERS_MOTORISTA = new USERS_MOTORISTA();
		return $USERS_MOTORISTA->update($obj,$id);
	}

	function delete($obj,$id){
		$USERS_MOTORISTA = new USERS_MOTORISTA();
		return $USERS_MOTORISTA->delete($obj,$id);
	}

	function find($id = null){
		$USERS_MOTORISTA = new USERS_MOTORISTA();
		return $USERS_MOTORISTA->find($id);
	}

	function findAll(){
		$USERS_MOTORISTA = new USERS_MOTORISTA();
		return $USERS_MOTORISTA->findAll();
	}
}

?>