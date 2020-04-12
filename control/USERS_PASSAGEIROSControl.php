<?php
include (__DIR__.'/../model/USERS_PASSAGEIROS.php');

class USERS_PASSAGEIROSControl{

    function insert($obj){
	 $USERS_PASSAGEIROS=new USERS_PASSAGEIROS();
	 return $USERS_PASSAGEIROS->insert($obj);
    }
    function update($obj,$id){
	 $USERS_PASSAGEIROS=new USERS_PASSAGEIROS();
	 return $USERS_PASSAGEIROS->update($obj,$id);
    }
    function delete($obj,$id){
    	$USERS_PASSAGEIROS = new USERS_PASSAGEIROS();
    	return $USERS_PASSAGEIROS ->delete($obj,$id);
    }
    function find($id = null){
    	$USERS_PASSAGEIROS =new USERS_PASSAGEIROS();
    	return $USERS_PASSAGEIROS->find($id);
    }
    function findAll(){
    	$USERS_PASSAGEIROS=new USERS_PASSAGEIROS();
    	return $USERS_PASSAGEIROS->findAll();
    }

}




?>