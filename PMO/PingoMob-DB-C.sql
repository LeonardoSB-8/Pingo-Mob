# Versão completa do banco com ((DUAS)) fotos e ((DOIS)) esportes em cada quadra

create database PINGO_C;
use PINGO_C;

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
    Descricao text,
    Foto blob,
    Cidade varchar(50),
    Bairro varchar(50),
    primary key (ID_Quadra)
);

CREATE TABLE QuadraEsporte (
    ID_QuadraEsporte int auto_increment PRIMARY KEY,
    ID_Quadra int NOT NULL,
    ID_Esporte int NOT NULL,
    FOREIGN KEY (ID_Quadra) REFERENCES Quadra(ID_Quadra),
    FOREIGN KEY (ID_Esporte) REFERENCES Esportes(ID_Esporte),
    UNIQUE KEY (ID_Quadra, ID_Esporte)
);

create table FotosQuadra (
    ID_Foto int auto_increment,
    ID_Quadra int,
    URL_Foto text,
    primary key (ID_Foto),
    foreign key (ID_Quadra) references Quadra(ID_Quadra)
);

-- Inserir esportes primeiro
INSERT INTO Esportes (NomeEsporte)
VALUES
('Futsal'),       -- ID 1
('Volei'),        -- ID 2
('Basquete'),     -- ID 3
('Futebol');      -- ID 4

-- Inserir quadras 
INSERT INTO Quadra (NomeQuadra, EnderecoQuadra, Contato, Descricao, Cidade, Bairro)
VALUES 
('Campo de Futebol Society Bom de Bola', 'Avenida Brasil, 456', '21991234567', 'Excelente campo de grama sintética.', 'Rio de Janeiro', 'Copacabana'),

('Quadra Poliesportiva Central', 'Rua das Flores, 123', '11987654321', 'Ótima quadra para diversos esportes.', 'São Paulo', 'Centro');

-- Inserir relações entre quadras e esportes
INSERT INTO QuadraEsporte (ID_Quadra, ID_Esporte) VALUES
(1, 4), -- Quadra 1 - Futebol
(1, 3), -- Quadra 1 - Basquete
(2, 1), -- Quadra 2 - Futsal
(2, 2); -- Quadra 2 - Vôlei

-- Inserir fotos
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

-- Consultas básicas
SELECT * FROM Usuario;
SELECT * FROM Esportes;
SELECT * FROM FotosQuadra;
SELECT * FROM QuadraEsporte;

-- Consulta COMPLETA das quadras com esportes e fotos
SELECT 
    q.ID_Quadra,
    q.NomeQuadra,
    q.EnderecoQuadra,
    q.Contato,
    GROUP_CONCAT(DISTINCT e.NomeEsporte SEPARATOR ', ') AS Esportes,
    q.Descricao,
    q.Cidade,
    q.Bairro,
    GROUP_CONCAT(DISTINCT fq.URL_Foto SEPARATOR '; ') AS Fotos
FROM 
    Quadra q
LEFT JOIN 
    QuadraEsporte qe ON q.ID_Quadra = qe.ID_Quadra
LEFT JOIN 
    Esportes e ON qe.ID_Esporte = e.ID_Esporte
LEFT JOIN 
    FotosQuadra fq ON q.ID_Quadra = fq.ID_Quadra
GROUP BY 
    q.ID_Quadra;