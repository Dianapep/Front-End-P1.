const botao = document.querySelector('#contact-submit');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

botao.addEventListener("click",  (event) => {
    event.preventDefault();
    checar(); 


})

function checar() {
    var nomeValue = nome.value;
    var emailValue = email.value;
    var msgValue = mensagem.value;

    var obj = {nome: nomeValue, email: emailValue, mensagem: msgValue}
    
    inserirMensagem(obj);
   
   document.getElementById('formulario').reset(); 
   
}