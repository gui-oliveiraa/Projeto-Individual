drop database projetoIndividual;

create database projetoIndividual;
use projetoIndividual;

create table Usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(45),
senha varchar(15));

create table Quiz (
idQuiz int primary key auto_increment,
qtdAcertos int);

select * from Quiz;

-- CRIANDO A FK DE RELACIONAMENTO USUARIO-QUIZ
alter table Usuario add column fkQuiz int;
alter table Usuario add constraint fkQuiz foreign key (fkQuiz) references Quiz(idQuiz);

-- TABELA GENERO DEPENDENTE DO USUARIO
create table Genero (
idGenero int primary key auto_increment,
genero char(1)
);

alter table Usuario add column fkGenero int;
alter table Usuario add constraint fkGenero foreign key (fkGenero) references Genero(idGenero);

select * from Genero;

insert into Genero (idGenero, genero) values
 (1, 'M'),
 (2, 'F');
 
 select * from Usuario join Genero on idGenero = fkGenero;
-- truncate table Usuario;