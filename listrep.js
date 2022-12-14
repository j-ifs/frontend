import {delSuccess, delError} from './popup.js'

redirectrep()

function redirectrep() {
  if (sessionStorage.getItem('user') != 'administrador') {
    location.replace('main.html')
  }
}

window.onload = function listrep(){
    /*axios.get('api/user/index.php')
    .then(function(response){
        const data = response.data
        const table = document.getElementById("tablebody")
        table.innerHTML = " "
        for(let user of data.users){
          if(user.role === "representante"){
            table.innerHTML += `<td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.class}</td>
            <td>${user.role}</td>
            <td><button value=${user.id} id=botao2>Alterar</button></td>
            <td><button value=${user.id} class=botaoexcluir id=botao3>Excluir</button></td>`;
          }
        }
        function deletRep(event) {
        let deleteButton = event.target.value
        console.log(deleteButton)
        axios.delete(`api/user/destroy.php/${deleteButton}`, {
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
      botaodel.addEventListener("click", deletRep)
     }
    })*/
    axios.get('api/user/index.php')
    .then(function(response){
      const data = response.data.users
      const reps = data.filter(rep => rep.role === "representante");
      $('#example').DataTable( {
        //"ajax": "data/objects.txt",
        "data":reps,
        "columns": [
            { "data": "name" },
            { "data": "username" },
            { "data": "class" },
            { "data": "role"}
        ]
    } );
    })
  }