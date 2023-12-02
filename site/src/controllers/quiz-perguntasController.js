var quizModel = require("../models/quiz-perguntasModel");

function cadastrar(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    }

    quizModel.cadastrar(pontuacao).then(function(resposta){
        res.status(200).send("pontuação criada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}