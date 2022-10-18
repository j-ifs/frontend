window.onload = function listadm(){
  axios.get('/jifs/api/user/index.php')
  .then(function(response){
      const data = response.data
      const table = document.getElementById("tablebody")
      table.innerHTML = " "
      for(let user of data.users){
        if(user.role = "admnistrador"){
          table.innerHTML += `<td>${user.username}</td>
          <td>${user.role}</td>`;
        }
      }
  })
}