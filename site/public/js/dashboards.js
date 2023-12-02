
fetch("/dashboard/listarGenero", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }

}).then(function (resposta) {

    if (resposta.ok) {
        console.log(resposta);

        // O QUE VEM DO BANCO
        resposta.json().then(json => {
            const masculino = json.qtdCadastrados[0].QtdCadaGenero;
            const feminino = json.qtdCadastrados[1].QtdCadaGenero;

            console.log(masculino, feminino);
            console.log(JSON.stringify(json));

            grafico1(masculino, feminino);
        });

    } else {

        alert(`Os dados inseridos não foram encontrados`)

        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
            // console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

function grafico1(masculino, feminino) {

    const ctx = document.getElementById('grafico1');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Masculino', 'Feminino'],
            datasets: [{
                data: [masculino, feminino],
            }]
        },
    });
}

// END POINT 2
fetch("/dashboard/listarMedia", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }

}).then(function (resposta) {

    if (resposta.ok) {
        console.log(resposta);

        // O QUE VEM DO BANCO
        resposta.json().then(json => {
            const media = json.qtdCadastrados[0].pontuacaoMedia;

            console.log(media);
            console.log(JSON.stringify(json));

            grafico2(media);
        });

    } else {

        alert(`Os dados inseridos não foram encontrados`)

        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
            // console.error(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

function grafico2(media) {
const ctx = document.getElementById('grafico2');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Média atual'],
        datasets: [{
            label: 'Média de acertos dos usuários',
            data: [media],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
