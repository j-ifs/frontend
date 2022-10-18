window.onload = function listadm(){
  axios.get('api/user/index.php')
  .then(function(response){
      const data = response.data
      const table = document.getElementById("tablebody")
      table.innerHTML = " "
      for(let user of data.users){
        if(user.role = "admnistrador"){
          table.innerHTML += `<td>${user.username}</td>
          <td>${user.role}</td>
          <td><button value=${user.id} id=botao2>Alterar</button></td>
          <td><button value=${user.id} id=botao3>Excluir</button></td>`;
        } 
      }
  })
}