import {delSuccess, delError} from './popup.js'

redirectrep()

function redirectrep() {
  if (sessionStorage.getItem('user') != 'administrador') {
    location.replace('main.html')
  }
}

window.onload = function listadm(){
  /*axios.get('api/user/index.php')
  .then(function(response){
      const data = response.data
      const table = document.getElementById("tablebody")
      table.innerHTML = " "
      for(let user of data.users){
        if(user.role === "administrador"){
          table.innerHTML += `<td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.role}</td>
          <td><button value=${user.id} id=botao2>Alterar</button></td>
          <td><button value=${user.id} class=botaoexcluir id=botao3>Excluir</button></td>`;
        } 
      }
      function deletAdm(event) {
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
      botaodel.addEventListener("click", deletAdm)
     }
  })*/
  
  axios.get('api/user/index.php')
    .then(function(response){
      const data = response.data.users
      const adms = data.filter(adm => adm.role === "administrador");
      $('#example').DataTable( {
        //"ajax": "data/objects.txt",
        "data":adms,
        "columns": [
            { "data": "name" },
            { "data": "username" },
            { "data": "role" },
        ]
    } );
    })
}


