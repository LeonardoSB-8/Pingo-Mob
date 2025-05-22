# Versão Simplificado do banco com ((UMA)) foto e ((UM)) esporte em cada quadra

create database PINGO_S;
use PINGO_S;

create table Usuario(
    ID_Usuario int auto_increment PRIMARY KEY,
    NomeUsuario varchar(100) not null,
    Email varchar(150) not null unique,
    CPF varchar(11) not null unique,
    Senha varchar(225) not null,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table Quadra(
    ID_Quadra int auto_increment,
    NomeQuadra varchar(50) not null,
    EnderecoQuadra varchar(50) not null,
    Contato varchar(11) not null,
    NomeEsporte varchar(100) not null,
    Descricao text,
    foto text,
    Cidade varchar(50),
    Bairro varchar(50),
    primary key (ID_Quadra)
);

INSERT INTO Quadra (NomeQuadra, EnderecoQuadra, Contato, NomeEsporte, Descricao, foto,  Cidade, Bairro)
VALUES 
('Campo de Futebol Society Bom de Bola', 'Avenida Brasil, 456', '21991234567', 'Society', 'Excelente campo de grama sintética.','https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image1.jpg', 'Rio de Janeiro', 'Copacabana'),

('Quadra Poliesportiva Central', 'Rua das Flores, 123', '11987654321', 'Vôlei', 'Ótima quadra para diversos esportes.','https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image3.jpg', 'São Paulo', 'Centro');


INSERT INTO Usuario (NomeUsuario, Email, CPF, Senha)
VALUES 
('Otavio Charles', 'joaoAlmeida@email.com', '21345678901', 'senha123'),

('Ferreto','admin@email.com', '32145678901',  '123senha');


SELECT * FROM Usuario;
SELECT * FROM Quadra;