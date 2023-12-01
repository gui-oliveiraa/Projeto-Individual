// VALIDAÇÕES

function Cadastrar() {
  var Nome = nome_input.value;
  var Genero = genero_select.value;
  var Email = email_input.value;
  var Senha = senha_input.value;
  var ConfirmaçãoSenha = ConfirmaçãoSenha_input.value;

  if (Nome == "" || Genero == 0 || Email == "" || Senha == "" || ConfirmaçãoSenha == "") {
    alert(`Preencha todos os campos!`);
  } else if (Nome.indexOf(` `) <= 0) {
    alert(`Digite seu nome e sobrenome!`);
  }
  else if (Email.endsWith(`.com`) == false || Email.indexOf('@') <= 0) {
    alert(`Email inválido!`);
  } else if (Senha.length < 4) {
    alert(`Crie uma senha com pelo menos 4 dígitos!`)
  } else if (Senha.length > 15) {
    alert(`Crie uma senha menor!`)
  }
  else if (ConfirmaçãoSenha != Senha) {
    alert(`As senhas não conferem!`)
  } else {
    alert(`Cadastro realizado com sucesso! Prossiga para o login`)

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: Nome,
        generoServer: Genero,
        emailServer: Email,
        senhaServer: Senha
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, "1000");
          //   2000

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;

    // function listar() {
    //   fetch("/empresas/listar", {
    //     method: "GET",
    //   })
    //     .then(function (resposta) {
    //       resposta.json().then((empresas) => {
    //         empresas.forEach((empresa) => {
    //           listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
    //         });
    //       });
    //     })
    //     .catch(function (resposta) {
    //       console.log(`#ERRO: ${resposta}`);
    //     });
    // }

    function sumirMensagem() {
      cardErro.style.display = "none";
    }
  }
}