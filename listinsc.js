import {delSuccess, delError} from './popup.js'

window.onload = function listinsc(){
    axios.get('api/subscription/index.php')
    .then(function(response){
        const data = response.data
        const table = document.getElementById("tablebody")
        table.innerHTML = " "
        for(let subscription of data.subscriptions){
            table.innerHTML += `<tr><td>${subscription.student.name}</td>
            <td>${subscription.sport.name}</td>
            <td>${subscription.class.id}</td>
            <td><button value=${subscription.id} id=botao2>Alterar</button></td>
            <td><button value=${subscription.id} class=botaoexcluir id=botao3>Excluir</button></td>`;
        }
        function deletAdm(event) {
            let deleteButton = event.target.value
            console.log(deleteButton)
            axios.delete(`api/subscription/destroy.php/${deleteButton}`, {
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