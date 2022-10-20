import {delSuccess, delError} from './popup.js'

window.onload = function listjog(){
    axios.get('api/student/index.php')
    .then(function(response){
        const data = response.data
        const table = document.getElementById("tablebody")
        table.innerHTML = " "
        for(let student of data.students){
            table.innerHTML += `<tr><td>${student.name}</td>
            <td>${student.registration}</td>
            <td>${student.birthdate}</td>
            <td>${student.class}</td>
            <td><button value=${student.id} id=botao2>Alterar</button></td>
            <td><button value=${student.id} class=botaoexcluir id=botao3>Excluir</button></td>`;
        }
        function deletJog(event) {
            let deleteButton = event.target.value
            console.log(deleteButton)
            axios.delete(`api/student/destroy.php/${deleteButton}`, {
              })
              .then(function (response) {
                delSuccess()
                setTimeout(function(){
                  window.location.reload(1);
               }, 1000);
              })
              .catch(function (error) {
                delError()
              });
        }
         let deleteButton = document.querySelectorAll(".botaoexcluir")
         console.log(deleteButton)
         for(let botaodel of deleteButton){
          botaodel.addEventListener("click", deletJog)
         }
    })
}