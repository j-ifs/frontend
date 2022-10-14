import {cadSuccess, cadError} from './popup.js'
var formField = document.getElementById("formAdm")


function cadAdm(event){
    let nameValue = document.getElementById("firstname").value
    let passwordValue = document.getElementById("senha").value
    let usernameValue = document.getElementById("user").value

    event.preventDefault();

    axios.post('/jifs/api/user/store.php', {
        dados: {
          username: usernameValue,
          password: passwordValue,
          role: "administrador"
        }
      })
      .then(function (response) {
        cadSuccess()
      })
      .catch(function (error) {
        cadError()
      });
}//

document.getElementById("botao").addEventListener("click", cadAdm)