<?php
include(__DIR__ . '/../model/conexao.php');

class USERS_MOTORISTA extends conexao
{

	private $id;
	private $nome;
	private $email;
	private $passwd;
	private $telefone;
	private $endereco_rua;
	private $endereco_num;
	private $endereco_bairro;
	private $cep;
	private $cidade;



	function getID()
	{
		return $this->id;
	}
	function getNome()
	{
		return $this->nome;
	}
	function getEmail()
	{
		return $this->email;
	}
	function getPasswd()
	{
		return $this->passwd;
	}
	function gettelefone()
	{
		return $this->telefone;
	}
	function getEndereco_rua()
	{
		return $this->endereco_rua;
	}
	function getEndereco_num()
	{
		return $this->endereco_num;
	}
	function getEndereco_bairro()
	{
		return $this->endereco_bairro;
	}
	function getCep()
	{
		return $this->cep;
	}
	function getCidade()
	{
		return $this->cidade;
	}

	function setNome($nome)
	{
		$this->nome = $nome;
	}

	function setEmail($email)
	{
		$this->email = $email;
	}

	function setPasswd($passwd)
	{
		$this->passwd = $passwd;
	}

	function settelefone($telefone)
	{
		$this->telefone = $telefone;
	}
	function setEndereco_rua($endereco_rua)
	{
		$this->endereco_rua = $endereco_rua;
	}
	function setEndereco_num($endereco_num)
	{
		$this->endereco_num = $endereco_num;
	}
	function setEndereco_bairro($endereco_bairro)
	{
		$this->endereco_bairro = $endereco_bairro;
	}
	function setCep($cep)
	{
		$this->cep = $cep;
	}
	function setCidade($cidade)
	{
		$this->cidade = $cidade;
	}
	function insert($obj)
	{
		$sql =
			"INSERT INTO USERS_MOTORISTA
			(
			nome,
			email,
			passwd,
			telefone,
			endereco_rua,
			endereco_num,
			endereco_bairro,
			cep,
			cidade)
			VALUES
			(
			:nome,
			:email,
			password(:passwd,)
			:telefone,
			:endereco_rua,
			:endereco_num,
			:endereco_bairro,
			:cep,
			:cidade);
			";
		$consulta = Conexao::prepare($sql);
		$consulta->bindvalue('nome', $obj->nome);
		$consulta->bindvalue('email', $obj->email);
		$consulta->bindvalue('passwd', $obj->passwd);
		$consulta->bindvalue('telefone', $obj->telefone);
		$consulta->bindvalue('endereco_rua', $obj->endereco_rua);
		$consulta->bindvalue('endereco_num', $obj->endereco_num);
		$consulta->bindvalue('endereco_bairro', $obj->endereco_bairro);
		$consulta->bindvalue('cep', $obj->cep);
		$consulta->bindvalue('cidade', $obj->cidade);
		return $consulta->execute();
	}
	function UPDATE($obj, $id = null)
	{
		$sql =
"
    UPDATE 
    USERS_MOTORISTA
    SET
    nome = :nome,
    email = :email,
	passwd = :passwd,
    telefone = :telefone:,
	endereco_rua=:endereco_rua,
	endereco_num=:endereco_num,
	endereco_bairro=:endereco_bairro,
	cep=:cep,
	cidade=:cidade,
    WHERE 
	id = :id
	;
	";
	
		$consulta = Conexao::prepare($sql);
		$consulta->bindvalue('nome', $obj->nome);
		$consulta->bindvalue('email', $obj->email);
		$consulta->bindvalue('passwd', $obj->passwd);
		$consulta->bindvalue('telefone', $obj->telefone);
		$consulta->bindvalue('endereco_rua', $obj->endereco_rua);
		$consulta->bindvalue('endereco_num', $obj->endereco_num);
		$consulta->bindvalue('endereco_bairro', $obj->endereco_bairro);
		$consulta->bindvalue('cep', $obj->cep);
		$consulta->bindvalue('cidade', $obj->cidade);
		return $consulta->execute();
	}

	function DELETE($obj, $id = null)
	{
		$sql = "DELETE FROM USERS_MOTORISTA WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id', $id);
		$consulta->execute();
	}

	function find($id = null)
	{
		$sql =  "SELECT * FROM USERS_MOTORISTA WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id', $id);
		$consulta->execute();
	}

	function findAll()
	{
		$sql = "SELECT * FROM USERS_MOTORISTA";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}
}
