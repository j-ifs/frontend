import {cadSuccess, cadError} from './popup.js'

var formField = document.getElementById("formRep")

$(document).ready(function(){
  $("#number").keypress(function(){
    if(this.value.length == 10){
      return false;
    }
  })
})

function storeRequiriments(event){

  let usernameValue = document.getElementById("firstname").value
  let numberValue = document.getElementById("number").value
  let passwordValue = document.getElementById("password").value
  let turmaValue = document.getElementById("turma").value

  event.preventDefault();

  axios.post('api/user/store.php', {
    user:{ 
      role: "representante",
      username: usernameValue,
      password: passwordValue,
      class: turmaValue
    }
  })
  .then(function (response) {
    cadSuccess()
  })
  .catch(function (error) {
    cadError()
  });
}

formField.addEventListener("submit", storeRequiriments)