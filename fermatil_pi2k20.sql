-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 15-Abr-2020 às 20:19
-- Versão do servidor: 10.1.17-MariaDB
-- versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fermatil_pi2k20`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `USERS_MOTORISTA`
--

CREATE TABLE `USERS_MOTORISTA` (
  `id` int(11) NOT NULL,
  `nome` text NOT NULL,
  `email` text NOT NULL,
  `passwd` text NOT NULL,
  `telefone` int(11) NOT NULL,
  `endereco_rua` text NOT NULL,
  `endereco_num` int(11) NOT NULL,
  `endereco_bairro` text NOT NULL,
  `cep` varchar(11) NOT NULL,
  `cidade` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `USERS_MOTORISTA`
--

INSERT INTO `USERS_MOTORISTA` (`id`, `nome`, `email`, `passwd`, `telefone`, `endereco_rua`, `endereco_num`, `endereco_bairro`, `cep`, `cidade`) VALUES
(1, 'teste1', 'teste1@teste.com', '1234567', 123456789, '', 0, '', '0', ''),
(2, 'teste2', 'teste2@teste.com.br', '123456', 987654321, '', 0, '', '0', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `USERS_PASSAGEIROS`
--

CREATE TABLE `USERS_PASSAGEIROS` (
  `id` int(11) NOT NULL,
  `id_motorista` int(11) NOT NULL,
  `Nome` text NOT NULL,
  `email` text NOT NULL,
  `passwd` text NOT NULL,
  `telefone` int(11) NOT NULL,
  `endereco_rua` text NOT NULL,
  `endereco_num` int(11) NOT NULL,
  `endereco_bairro` text NOT NULL,
  `cep` varchar(11) NOT NULL,
  `cidade` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `USERS_PASSAGEIROS`
--

INSERT INTO `USERS_PASSAGEIROS` (`id`, `id_motorista`, `Nome`, `email`, `passwd`, `telefone`, `endereco_rua`, `endereco_num`, `endereco_bairro`, `cep`, `cidade`) VALUES
(1, 1, 'abspgiu', 'vbsdfi@nfupas.fasr', '432tfg34ertgf', 168466168, 'rguifoashrg', 234, 'fvbhkzsldvb', '3242345', 'bsdfrbs');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `USERS_MOTORISTA`
--
ALTER TABLE `USERS_MOTORISTA`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `USERS_PASSAGEIROS`
--
ALTER TABLE `USERS_PASSAGEIROS`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_motorista` (`id_motorista`) USING BTREE;

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `USERS_MOTORISTA`
--
ALTER TABLE `USERS_MOTORISTA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `USERS_PASSAGEIROS`
--
ALTER TABLE `USERS_PASSAGEIROS`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
