window.onload = function listinsc(){
    axios.get('/jifs/api/student/index.php')
    .then(function(response){
        const data = response.data
        const table = document.getElementById("tablebody")
        table.innerHTML = " "
        for(let student of data.students){
            table.innerHTML += `<tr><td>${student.name}</td>
            <td>${student.registration}</td>
            <td><button value=${user.id} id=botao2>Alterar</button></td>
            <td><button value=${user.id} class=botaoexcluir id=botao3>Excluir</button></td>`;
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
    })
}