var dashboardModel = require("../models/dashboardModel");

function QtdCadaGenero(req, res) {

    dashboardModel.QtdCadaGenero()
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                console.log(resultadoAutenticar);

                res.json({
                    qtdCadastrados: resultadoAutenticar,
                });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pontuacaoMedia(req, res) {

    dashboardModel.pontuacaoMedia()
    .then(
       function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`)
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
        console.log(resultadoAutenticar);

        res.json({
            qtdCadastrados: resultadoAutenticar,
        })
       }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    QtdCadaGenero,
    pontuacaoMedia
};