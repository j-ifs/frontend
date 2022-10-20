import {loginSuccess, loginError} from './popup.js'

var formField = document.querySelector(".formLogin")

function loginRequiriments(event){

  let usernameValue = document.getElementById("usuario").value
  let passwordValue = document.getElementById("senha").value

  event.preventDefault();

  axios.post('api/user/login.php', {
    user:{
    username: usernameValue,
    password: passwordValue
    }
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