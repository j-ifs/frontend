var formField = document.querySelector(".formLogin")
const url = "http://jifs.freetzi.com/api"

function testarEvento(event){
  user = {
    "userValue": document.getElementById("usuario").value,
    "passwordValue": document.getElementById("senha").value
  }
  event.preventDefault();
}

//formField.addEventListener('submit', testarEvento)

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



function loginRequiriments(event){

  let usernameValue = document.getElementById("usuario").value
  let passwordValue = document.getElementById("senha").value

  event.preventDefault();

  axios.post(url+'/user/login.php', {
    username: usernameValue,
    password: passwordValue
  })
  .then(function (response) {
    loginSuccess()
    location.href="mainadm.html"
  })
  .catch(function (error) {
    loginError()
  });
}

formField.addEventListener('submit', loginRequiriments)