var formField = document.querySelector(".formLogin")

function testarEvento(event){
  user = {
    "userValue": document.getElementById("usuario").value,
    "passwordValue": document.getElementById("senha").value
  }
  event.preventDefault();
}

formField.addEventListener('submit', testarEvento)

function loginError(){
  swal({
    title: 'Login Inválido', 
    text: 'Usuário ou Senha incorreto',
    icon: 'error'
  })
}

function loginSuccess(){
  swal({
    title: 'Bem Vindo', 
    text: 'Login Efetuado com Sucesso',
    icon: 'success'
  })
}