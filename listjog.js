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
            <td><button value=${student.id} id=botao3>Excluir</button></td>`;
        }
    })
}