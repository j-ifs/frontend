navstyle()

let navstyle = document.getElementsByTagName("head")

function navstyle(){
    if (sessionStorage.getItem('user') === 'administrador'){
        navstyle.innerHTML = `  <link rel="stylesheet" href="./stylenavadm.css">`
    } else if (sessionStorage.getItem('user') === 'representante'){
        navstyle.innerHTML = `  <link rel="stylesheet" href="./stylenavrep.css">`
    }
}