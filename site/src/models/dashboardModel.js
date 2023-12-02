var database = require("../database/config");

function QtdCadaGenero() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", )
    var instrucao = `
     select count(fkGenero) as 'QtdCadaGenero' from Usuario group by fkGenero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pontuacaoMedia() {
    var instrucao = `
    select avg(pontuacao) as 'pontuacaoMedia' from Quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    QtdCadaGenero,
    pontuacaoMedia
};