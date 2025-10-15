const inputemail = document.getElementById('email');
const inputsenha = document.getElementById('senha');
const botaologar = document.getElementById('botao-logar');

const emailError = document.getElementById('span-email'); 
const senhaError = document.getElementById('span-senha');

botaologar.addEventListener('click', function(event) {
    event.preventDefault(); 

    let valid = true;

    
    emailError.textContent = "";
    senhaError.textContent = "";

   
    if (inputemail.value.trim() === "") {
        emailError.textContent = "O campo de e-mail não pode ficar vazio.";
        valid = false;
    }

    
    if (inputsenha.value.trim() === "") {
        senhaError.textContent = "O campo de senha não pode ficar vazio.";
        valid = false;
    }

    
    if (valid) {
        alert("Campos preenchidos corretamente!");
    }
});