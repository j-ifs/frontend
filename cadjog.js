import {cadSuccess, cadError} from './popup.js'

var formField = document.getElementById("formRep")

function storeRequiriments(event){

  let nameValue = document.getElementById("firstname").value
  let numberValue = document.getElementById("number").value
  let dateValue = document.getElementById("data_nasc").value
  let turmaValue = document.getElementById("turma").value

  event.preventDefault();

  axios.post('/jifs/api/student/store.php', {
    student:{ 
      registration: numberValue,
      name: nameValue,
      class: turmaValue,
      birthdate: dateValue     
    }
  })
  .then(function (response) {
    cadSuccess()
  })
  .catch(function (error) {
    cadError()
  });
}

document.getElementById("botao").addEventListener("click", storeRequiriments)