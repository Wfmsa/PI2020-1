<?php 
include (__DIR__.'/../model/conexao.php');

class cacamba extends Conexao{
	private $id;
	private $situacao;


public function getID()
{
	return $this->id;
}
public function getsituacao()
{
	return $this->situacao;
}
public function setID($id)
{
	$this->id=$id;
}
public function setsituacao($situacao)
{
	$this->situacao=$situacao;
}

public function insert($obj){
	var_dump($obj);		
	$sql="INSERT INTO Cacamba (situacao) VALUES (:situacao)";
	$consulta = Conexao::prepare($sql);
	$consulta->bindvalue('situacao',$obj->situacao);
	return $consulta->execute();
}

public function update(){
	$sql=
	"UPDATE 
	 Cacamba 
	 SET
     id = :id,
     situacao = :situacao 
     WHERE 
     id = :id;";
     $consulta = Conexao::prepare($sql);
	 $consulta->bindvalue('id',$obj->id);
	 $consulta->bindvalue('situacao',$obj->situacao);
	 return $consulta->execute();
}
public function delete(){
	$sql=("DELETE FROM Cacamba
WHERE id = :id");
$consulta=Conexao::prepare($sql);
$consulta=bindvalue('id',$id);
return $consulta->execute();
}
public function find($id=null){
	$sql="SELECT * FROM cacamba WHERE id = :id";
	$consulta = Conexao::prepare($sql);
	$consulta->bindValue('id',$id);
	$consulta->execute();
	return $consulta->fetchOne();
}
public function findAll(){
	$sql = "SELECT * FROM cacamba";
	$consulta = Conexao::prepare($sql);
	$consulta->execute();
	return $consulta->fetchAll();
}













	


















} 

 ?>

