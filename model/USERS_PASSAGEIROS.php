<?php 
include (__DIR__.'/../model/conexao.php');

class USERS_PASSAGEIROS extends Conexao{
	private $id;
	private $id_motorista;
	private $nome;
	private $email;
	private $passwd;
	private $celular;
	private $endereco_rua;
	private $endereco_num;
	private $endereco_bairro;
	private $cep;
	private $cidade;

	function getID()
	{
		return $this->id;
	}
	function getID_motorista()
	{
		return $this->id_motorista;
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
	function getCelular()
	{
		return $this->celular;
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

	function setId_motorista($id_motorista)
	{
		$this->id_motorista = $id_motorista;
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

	function setCelular($celular)
	{
		$this->celular = $celular;
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
			"INSERT INTO USERS_PASSAGEIROS (id_motorista,Nome,Email,passwd,Celular,endereco_rua,endereco_num,endereco_bairro,cep,cidade) VALUES (:nome,:email,:celular,:endereco_rua,:endereco_num,:endereco_bairro,:cep,:cidade)";
		$consulta = Conexao::prepare($sql);
		$consulta->bindvalue('id_motorista', $obj->id_motorista);
		$consulta->bindvalue('nome', $obj->nome);
		$consulta->bindvalue('email', $obj->email);
		$consulta->bindvalue('passwd', $obj->passwd);
		$consulta->bindvalue('celular', $obj->celular);
		$consulta->bindvalue('endereco_rua', $obj->endereco_rua);
		$consulta->bindvalue('endereco_num', $obj->endereco_num);
		$consulta->bindvalue('endereco_bairro', $obj->endereco_bairro);
		$consulta->bindvalue('cep', $obj->cep);
		$consulta->bindvalue('cidade', $obj->cidade);
		$consulta->execute();
	}
	function UPDATE($obj, $id = null)
	{
		$sql =
			"UPDATE 
   USERS_PASSAGEIROS
   SET
   Id_motorista=:Id_motorista,
    Nome = :Nome,
    Email = :Email,
	passwd = :passwd,
    Celular = :Celular:,
	endereco_rua=:endereco_rua,
	endereco_num=:endereco_num,
	endereco_bairro=:endereco_bairro,
	cep=:cep,
	cidade=:cidade,
   WHERE 
	id = :id;";
	
		$consulta = Conexao::prepare($sql);
		$consulta->bindvalue('id_motorista', $obj->id_motorista);
		$consulta->bindvalue('nome', $obj->nome);
		$consulta->bindvalue('email', $obj->email);
		$consulta->bindvalue('passwd', $obj->passwd);
		$consulta->bindvalue('celular', $obj->celular);
		$consulta->bindvalue('endereco_rua', $obj->endereco_rua);
		$consulta->bindvalue('endereco_num', $obj->endereco_num);
		$consulta->bindvalue('endereco_bairro', $obj->endereco_bairro);
		$consulta->bindvalue('cep', $obj->cep);
		$consulta->bindvalue('cidade', $obj->cidade);
		return $consulta->execute();
	}

	function DELETE($obj, $id = null)
	{
		$sql = "DELETE FROM USERS_PASSAGEIROS WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id', $id);
		$consulta->execute();
	}

	function find($id = null)
	{
		$sql =  "SELECT * FROM USERS_PASSAGEIROS WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id', $id);
		$consulta->execute();
	}

	function findAll()
	{
		$sql = "SELECT * FROM USERS_PASSAGEIROS";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}
}