var database = require("../database/config");

function cadastrar(pontuacao) {
    var instrucao = `
        INSERT INTO Quiz (pontuacao) VALUES ('${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};