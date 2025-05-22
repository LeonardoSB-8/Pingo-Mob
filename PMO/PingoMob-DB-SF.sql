#Versão com select das Fotos

create database PINGO_SF;
use PINGO_SF;

create table Usuario(
    ID_Usuario int auto_increment PRIMARY KEY,
    NomeUsuario varchar(100) not null,
    Email varchar(150) not null unique,
    CPF varchar(11) not null unique,
    Senha varchar(225) not null,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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
    ID_Esporte int not null,
    Descricao text,
    Foto blob,
    Cidade varchar(50),
    Bairro varchar(50),
    primary key (ID_Quadra),
    foreign key (ID_Esporte) references Esportes(ID_Esporte)
);

create table FotosQuadra (
    ID_Foto int auto_increment,
    ID_Quadra int,
    URL_Foto text,
    primary key (ID_Foto),
    foreign key (ID_Quadra) references Quadra(ID_Quadra)
);

-- CORREÇÃO: Inserir esportes PRIMEIRO
INSERT INTO Esportes (NomeEsporte)
VALUES
('Futsal'),       -- ID 1
('Volei'),        -- ID 2
('Basquete'),     -- ID 3
('Futebol');      -- ID 4

-- Agora inserir quadras (que referenciam esportes)
INSERT INTO Quadra (NomeQuadra, EnderecoQuadra, Contato, ID_Esporte, Descricao, Cidade, Bairro)
VALUES 
('Campo de Futebol Society Bom de Bola', 'Avenida Brasil, 456', '21991234567', 4, 'Excelente campo de grama sintética.', 'Rio de Janeiro', 'Copacabana'),

('Quadra Poliesportiva Central', 'Rua das Flores, 123', '11987654321', 1, 'Ótima quadra para diversos esportes.', 'São Paulo', 'Centro');

-- Agora inserir fotos (que referenciam quadras)
INSERT INTO FotosQuadra (ID_Quadra, URL_Foto)
VALUES
(1, 'https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image1.jpg'),
(1, 'https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image2.jpeg'),
(2, 'https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image3.jpg'),
(2, 'https://github.com/ph-pimentel/pingo-tcc/blob/master/pingo/public/img/Carrossel/image4.jpg');

-- Inserir usuário
INSERT INTO Usuario (NomeUsuario, Email, CPF, Senha)
VALUES 
('Otavio Charles', 'joaoAlmeida@email.com', '21345678901', 'senha123'),

('Ferreto','admin@email.com', '32145678901',  '123senha');

-- Consultas
SELECT * FROM Usuario;
SELECT * FROM Esportes;
SELECT * FROM FotosQuadra;

-- Consulta completa das quadras com esportes e fotos
SELECT 
    q.ID_Quadra,
    q.NomeQuadra,
    q.EnderecoQuadra,
    q.Contato,
    e.NomeEsporte,
    q.Descricao,
    q.Cidade,
    q.Bairro,
    GROUP_CONCAT(fq.URL_Foto SEPARATOR '; ') AS Fotos
FROM 
    Quadra q
JOIN 
    Esportes e ON q.ID_Esporte = e.ID_Esporte
LEFT JOIN 
    FotosQuadra fq ON q.ID_Quadra = fq.ID_Quadra
GROUP BY 
    q.ID_Quadra;