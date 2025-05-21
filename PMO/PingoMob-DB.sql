create database PINGO;
use PINGO;

create table Esportes(
	ID_Esporte int auto_increment,
    NomeEsporte varchar(100),
    primary key (ID_Esporte)
);

create table Quadra(
	ID_Quadra int auto_increment,
    NomeQuadra varchar(50) not null,
    EnderecoQuadra varchar(50) not null,
    Contato varchar(11) not null,
    ID_Esporte int,
    Descricao text,
    Foto varchar(255), -- Armazena imagem
    Cidade varchar(50),
    Bairro varchar(50),
    primary key (ID_Quadra),
    foreign key (ID_Esporte) references Esportes(ID_Esporte)
);

create table usuario(
	ID_Usuario int auto_increment PRIMARY KEY,
    NomeUsuario varchar(100) not null,
    Email varchar(150) not null unique,
    CPF varchar(11) not null unique,
    Senha varchar(225) not null ,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo ENUM('admin', 'usuario') DEFAULT 'usuario'
);

create table FotosQuadra (
	ID_Foto int auto_increment,
    ID_Quadra int,
    URL_Foto text,
    primary key (ID_Foto),
    foreign key (ID_Quadra) references Quadra(ID_Quadra)
);



INSERT INTO Esportes (NomeEsporte)
VALUES
('Futsal'),
('Volei'),
('Basquete'),
('Futebol');

INSERT INTO Quadra (NomeQuadra, EnderecoQuadra, Contato, Descricao, Cidade, Bairro, Foto)
VALUES ('Campo de Futebol Society Bom de Bola', 'Avenida Brasil, 456', '21991234567', 'Excelente campo de grama sintética.', 'Rio de Janeiro', 'Copacabana', '../src/assets/image2.jpeg');

select * from usuario;
select * from Esportes;
select * from Quadra;
select * from FotosQuadra;

SELECT COUNT(*) FROM usuario;