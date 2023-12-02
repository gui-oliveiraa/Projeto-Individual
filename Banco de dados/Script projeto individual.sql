-- drop database projetoindividual;
create database projetoIndividual;
use projetoIndividual;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(45),
senha varchar(15));

create table Quiz (
idQuiz int primary key auto_increment,
pontuacao int,
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario));

-- TABELA GENERO DEPENDENTE DO USUARIO
create table Genero (
idGenero int primary key auto_increment,
genero char(1)
);

alter table Usuario add column fkGenero int;
alter table Usuario add foreign key (fkGenero) references Genero(idGenero);

select * from Genero;
select * from Usuario;
select * from Quiz;

insert into Genero (idGenero, genero) values
 (1, 'M'),
 (2, 'F');
 
 -- passando valores para a dashboard de gênero (testando os comandos e inserindo no models)
 select count(fkGenero) as 'QtdCadaGenero' from Usuario group by fkGenero;
 select genero,count(idGenero) as 'QtdCadaGenero' from Usuario join Genero on idGenero = fkGenero group by idGenero;
 
 
 -- passando valores para a dashboard de média de acertos (testando os comandos e inserindo no models)
select avg(pontuacao) as 'pontuacaoMedia' from Quiz;

-- LIMPAR DADOS
-- truncate table Quiz;
-- alter table Quiz drop constraint fkUsu;
-- truncate table Usuario;




