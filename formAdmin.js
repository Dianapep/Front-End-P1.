const login = {
    email: 'admin@admin.com',
    senha: '1234',
  }
  /*obtendo valores do campo*/
  function getElements(id) {
    return document.getElementById(id)
  }
  
  function obterDados() {
    return {
        email: getElements('email').value,
        senha: getElements('senha').value,
    }
  }
  
  function enviar(event) {
    event.preventDefault()
    const dados = obterDados()
    if(dados.email === login.email && dados.senha === login.senha){
        window.location.href = 'dadosMensagens.html';
    } else {
        alert('Login ou senha incorretos')
    }
  
    validarUsuario(login);
  }