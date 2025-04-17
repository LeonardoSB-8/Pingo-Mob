CREATE TABLE VEICULOS 
(
id_veiculo SERIAL PRIMARY KEY,
data_entrada datetime,
placa varchar(10),
marca varchar(40),
modelo varchar(40),
ano varchar(10),
cor varchar(30),
preco float);

INSERT INTO VEICULOS (DATA_ENTRADA, PLACA, MARCA, MODELOO, ANO, COR, PRECO)
VALUES
('2024-02-23 10:30:00', 'AAA 1234', 'FIAT', 'TORO', '2017/2018', 'PRETO', 78.315),
('2024-02-23 10:30:00', 'BBB 1234', 'FORD', 'K16V', '2018/2019', 'CINZA', 48.891),
('2024-02-23 14:25:00', 'CCC 1234', 'FIAT', 'TORO', '2017/2018', 'PRETO', 78.315),




