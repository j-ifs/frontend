import {cadSuccess, cadError} from './popup.js'

redirectrep()

function redirectrep() {
  if (sessionStorage.getItem('user') != 'administrador') {
    location.replace('main.html')
  }
}

var formField = document.getElementById("formAdm")


function cadAdm(event){
    let nameValue = document.getElementById("firstname").value
    let passwordValue = document.getElementById("password").value
    let usernameValue = document.getElementById("user").value

    event.preventDefault();

    axios.post('api/user/store.php', {
      user:{
          name: nameValue,
          role: "administrador",
          username: usernameValue,
          password: passwordValue 
      }
      })
      .then(function (response) {
        cadSuccess()
      })
      .catch(function (error) {
        cadError()
      });
}//

formField.addEventListener("submit", cadAdm)