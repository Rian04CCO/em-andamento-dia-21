-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

CREATE DATABASE livrariaRecuperacao20261;

USE livrariaRecuperacao20261;

CREATE TABLE autor (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE genero (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50)
);

CREATE TABLE livro (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(50),
    fkAutor INT,
    fkGenero INT,
    precoCompra DOUBLE,
    precoVenda DOUBLE,
    CONSTRAINT fk_livro_autor FOREIGN KEY (fkAutor) REFERENCES autor(id),
    CONSTRAINT fk_livro_genero FOREIGN KEY (fkGenero) REFERENCES genero(id)
);


select livro.Quantidade_de_livro_em_estoque,  count(*) as estoque,
		genero.nome as Generos
        from livro join genero on livro.fkGenero = genero.id
        group by genero.nome;
        
select  livro.qtdLivro as disponiveis,
        genero.nome as Categoria,
        livro.titulo as Titulo
        from livro join genero on livro.fkGenero = genero.id
        order by genero.nome;
			
            
select genero.nome as Genero,
	count(*) as quantidade
    from genero
    group by nome;
		
        
/* selecionar os autores mais caros com um join em autor e livros para pegar os preços de venda */

select autor.nome as 'Auto da obra',
		livro.precoVenda as 'Total de vendas'
        from livro join autor on livro.fkAutor = autor.id 
        order by livro.precoVenda desc
        limit 3;