function Entrar() {

    var email = email_input.value;
    var senha = senha_input.value;

    if (email == "" || senha == "") {
        alert(`Preencha todos os campos!`)
    }
    else {

        console.log("FORM LOGIN: ", email);
        console.log("FORM SENHA: ", senha);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.SENHA_USUARIO = json.senha;


                    setTimeout(function () {
                        window.location = "quiz-perguntas.html";

                    }, 500); // apenas para exibir o loading

                });

            } else {

                alert (`Os dados inseridos não foram encontrados`)
                
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    // console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;

        function sumirMensagem() {
            cardErro.style.display = "none"
        }
    }
}

