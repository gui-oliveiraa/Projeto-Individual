var Lista_pontos = [];

const dadosQuiz = [
    {
        pergunta: "Questão 1 - Quem é o maior artilheiro (mais gols marcados) da história da Champions League?",
        opcoes: ["Lionel Messi", "Neymar", "Robert Lewandowski", "Cristiano Ronaldo"],
        respostaCorreta: "Cristiano Ronaldo"
    },
    {
        pergunta: "Questão 2 - Qual é o país com mais títulos de UEFA Champions League? ",
        opcoes: ["Itália", "Inglaterra", "Espanha", "Alemanha"],
        respostaCorreta: "Espanha"
    },
    {
        pergunta: "Questão 3 - Qual dos times a seguir não possui um título de Champions League?",
        opcoes: ["Nottingham Forest", "Manchester United", "Arsenal", "Borussia Dortmund"],
        respostaCorreta: "Arsenal"
    },
    {
        pergunta: "Questão 4 - Qual o único clube francês a conquistar a Champions?",
        opcoes: ["Olympique de Marselha", "Paris Saint-Germain", "Mônaco", "Lyon"],
        respostaCorreta: "Olympique de Marselha"
    },
    {
        pergunta: "Questão 5 - Qual o maior artilheiro brasileiro da competição?",
        opcoes: ["Ronaldinho", "Neymar", "Rivaldo", "Kaká"],
        respostaCorreta: "Neymar"
    },
    {
        pergunta: "Questão 6 - Qual o treinador com mais títulos conquistados?",
        opcoes: ["Pep Guardiola", "Zinedine Zidane", "Carlo Ancelotti", "José Mourinho"],
        respostaCorreta: "Carlo Ancelotti"
    },
    {
        pergunta: "Questão final - Qual o maior vice (mais finais perdidas) da competição?",
        opcoes: ["Juventus", "Real Madrid", "Benfica", "Bayern de Munique"],
        respostaCorreta: "Juventus"
    },

];

// DIV PERGUNTAS
const containerPergunta = document.getElementById("questao-container");
// DIV ALTERNATIVAS
const containerOpcoes = document.getElementById("options-container");
// BOTÃO RESULTADO
const botaoEnviar = document.getElementById("enviar");

// VARIÁVEIS GLOBAIS
let perguntaAtual = 0;
let pontuacao = 0;


// TROCAR DE UMA PERGUNTA PARA OUTRA
function carregarPergunta() {
    const perguntaAtualQuiz = dadosQuiz[perguntaAtual];

    containerPergunta.innerHTML = `<p>${perguntaAtualQuiz.pergunta}</p>`;

    containerOpcoes.innerHTML = "";
    for (let indice = 0; indice < perguntaAtualQuiz.opcoes.length; indice++) {
        const idOpcao = `opcao${indice + 1}`;
        containerOpcoes.innerHTML += `<input type="radio" name="pergunta" value="${perguntaAtualQuiz.opcoes[indice]}"
    id="${idOpcao}">
    <label for="${idOpcao}">${perguntaAtualQuiz.opcoes[indice]}</label><br>`;
    }
}


function verificarResposta() {
    const opcaoSelecionada = document.querySelector('input[name="pergunta"]:checked');

    // SE O USUÁRIO NÃO ESCOLHER NENHUMA OPÇÃO
    if (!opcaoSelecionada) {
        alert("Selecione uma alternativa!");
        return;
    }

    // INCREMENTANDO A PONTUAÇÃO 
    const respostaUsuario = opcaoSelecionada.value;
    if (respostaUsuario === dadosQuiz[perguntaAtual].respostaCorreta) {
        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < dadosQuiz.length) {
        carregarPergunta();

    }
    else {
        var aproveitamento = parseInt((pontuacao/dadosQuiz.length)*100);

        if (pontuacao == 0) {
            alert(`Quiz concluído! Infelizmente você não acertou nenhuma questão e obteve um aproveitamento de ${aproveitamento}%  :( `);
        }
        else if (pontuacao == 1) {
            alert(`Quiz concluído! Você acertou apenas ${pontuacao} questão em um total de ${dadosQuiz.length} e obteve um aproveitamento de ${aproveitamento}%`);
        } else {
            alert(`Quiz concluído! Você acertou ${pontuacao} questões em um total de ${dadosQuiz.length} e obteve um aproveitamento de ${aproveitamento}% !`);
        }
       

        // // ENVIANDO PARA O VETOR
        Lista_pontos.push(pontuacao);

        // MIGRAR PARA A DASHBOARD
        setTimeout(function () {
            window.location.href = "dashboard.html"
        }, 2000);

        // END POINT
        fetch("/quiz-perguntas/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                pontuacaoServer: pontuacao
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {

                    alert("Redirecionando para as dashboards")

                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);

            });

        return false;
    }
}

carregarPergunta();

botaoEnviar.addEventListener("click", verificarResposta);

