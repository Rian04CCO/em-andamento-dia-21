var database = require("../database/config");

function listar() {

    var instrucaoSql = `
       select 
livro.id,
livro.titulo,
livro.precoCompra,
livro.precoVenda,
livro.qtdLivro as estoque,
autor.nome as nomeAutor,
genero.nome as nomeGenero
 from livro join autor on autor.id = livro.fkAutor join genero on genero.id = livro.fkGenero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrar(titulo, fkAutor, fkGenero, precoCompra, precoVenda, qtdLivro) {

    var instrucaoSql = `
        INSERT INTO livro (titulo, fkAutor, fkGenero, precoCompra, precoVenda, qtdLivro) VALUES ('${titulo}', '${fkAutor}', '${fkGenero}', '${precoCompra}', '${precoVenda}', '${qtdLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoPrecoCompra, novoPrecoVenda, id) {

    var instrucaoSql = `
        UPDATE livro 
        SET precoCompra = '${novoPrecoCompra}', 
            precoVenda = '${novoPrecoVenda}'
        WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterQuantidade() {
    console.log("Model: obterQuantidade()");

    var instrucaoSql = `
        select  livro.qtdLivro as disponiveis,
        genero.nome as Categoria,
        livro.titulo as Titulo
        from livro join genero on livro.fkGenero = genero.id
        order by genero.nome;
    `;


    console.log("Executando SQL:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    cadastrar,
    editar,
    obterQuantidade
}
