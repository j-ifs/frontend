import {cadSuccess, cadError} from './popup.js'

var formField = document.getElementById("formInsc")

$(document).ready(function() {
  $('#jog').select2();
});

$(document).ready(function() {
  $('#turma').select2({
    placeholder: "Escolha a turma por qual você ira jogar",
    allowClear: true
  });
});

$(document).ready(function() {
  $('#sport').select2();
});

window.onload = function pegarJogador(){

    axios.get('api/student/index.php')
    .then(function (response){
        const data = response.data
        console.log(data)
        const select = document.getElementById('jog')
        select.innerHTML = " "
        for(let student of data.students) {
        select.innerHTML += `<option value=${student.id}>${student.name}</option>`;
}
    })
    .catch(function (error){
        console.log("ERROR JOGADOR")
    })

    axios.get('api/sport/index.php')
    .then(function (response){
      const data = response.data
      const select = document.getElementById("sport")
      select.innerHTML = " "
      for(let sport of data.sports) {
        select.innerHTML += `<option value=${sport.id}>${sport.name}</option>`
      }
    })
    .catch(function(error){
      console.log("ERROR MODALIDADE")
    })
    

}

function inscreverJogador(event){

  let jogadorValue = document.getElementById("jog").value
  let modalidadeValue = document.querySelector("#sport").value
  let turmaValue = document.getElementById("turma").value

  event.preventDefault();

  axios.post('/jifs/api/subscription/store.php', {
    subscription:{ 
      student: jogadorValue,
      sport: modalidadeValue,
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

formField.addEventListener("submit", inscreverJogador)