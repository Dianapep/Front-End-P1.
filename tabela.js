function carregarmsg() {

    const mensagem = obterMensagens();

    for(var i in mensagem){
        var nome = mensagem[i].nome
        var email = mensagem[i].email

        var linha = document.createElement("tr");

        var cNome = document.createElement("td");
        cNome.innerHTML = nome;

        var cEmail = document.createElement("td");
        cEmail.innerHTML = email;

        var cMensagem = document.createElement("td");
        cMensagem.innerHTML = mensagem;

        linha.appendChild(cNome);
        linha.appendChild(cEmail);
        linha.appendChild(cMensagem);

        var tabela = document.getElementById("dados");
        tabela.appendChild(linha);
        estilizar();
    }
}
function estilizar() {

    var linhas = document.getElementsByTagName("tr");

    var pintar = false;

    for(var i=0; i< linhas.length; i++) {

        if (pintar == true) {
            linhas[i].setAttribute("style", "background-color:gray; color:white;");
            pintar = false;
        } else {
            pintar = true;
        }

        
    }

}