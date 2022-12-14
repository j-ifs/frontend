import {cadSuccess, cadError} from './popup.js'

redirectrep()

function redirectrep() {
  if (sessionStorage.getItem('user') != 'administrador') {
    location.replace('main.html')
  }
}

var formField = document.getElementById("formRep")

$(document).ready(function() {
  $('#turma').select2({
    placeholder: "Selecione a turma do representante",
    allowClear: true
  });
});

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
      name: usernameValue,
      role: "representante",
      username: numberValue,
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