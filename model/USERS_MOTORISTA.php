<?php 
include (__DIR__.'/../model/conexao.php');

class Pessoa extends conexao{

private $id;
private $nome;
private $email;
private $celular;

	                                                                                          
		
function getID(){
	return $this->id;
}
function getNome(){
	return $this->nome;
}
 function getEmail(){
	return $this->email;
}
 function getCelular(){
	return $this->celular;
}
 function setID($id){
	$this->id=$id;
}

 function setNome($nome){
$this->nome=$nome;
}

 function setEmail($email){
	$this-> email=$email;
}

 function setCelular($celular){
	$this-> celular=$celular;
}
 function insert($obj){
	$sql=
	"INSERT INTO pessoa (Nome,Email,Celular) VALUES (:nome,:email,:celular)";
	$consulta = Conexao::prepare($sql);
	$consulta->bindvalue('nome',$obj->nome);
	$consulta->bindvalue('email',$obj->email);
	$consulta->bindvalue('celular',$obj->celular);
	$consulta->execute();
	
}
 function UPDATE($obj,$id=null){
	$sql=
"UPDATE 
   Pessoa
   SET
    Nome = Nome,
    Email = :Email,
    Celular = :Celular:,
   WHERE 
    id = :id;";

    $consulta = Conexao::prepare($sql);
	$consulta->bindvalue('nome',$obj->nome);
	$consulta->bindvalue('email',$obj->email);
	$consulta->bindvalue('celular',$obj->celular);
	$consulta->bindvalue('id',$obj->id);
	return $consulta->execute();
}

 function DELETE($obj,$id=null){
		$sql="DELETE FROM pessoa WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id',$id);
		$consulta->execute();
	}

	 function find($id = null){
        $sql =  "SELECT * FROM pessoa WHERE id = :id";
        $consulta = Conexao::prepare($sql);
        $consulta->bindValue('id',$id);
        $consulta->execute();
	}

	 function findAll(){
		$sql="SELECT * FROM pessoa";
		$consulta=Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}
}