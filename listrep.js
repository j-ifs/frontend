window.onload = function listrep(){
    axios.get('/jifs/api/user/index.php')
    .then(function(response){
        const data = response.data
        const table = document.getElementById("tablebody")
        table.innerHTML = " "
        for(let user of data.users){
          if(user.role === "representante"){
            table.innerHTML += `<td>${user.username}</td>
            <td>${user.class}</td>
            <td>${user.role}</td>`;
          }
        }
    })
  }