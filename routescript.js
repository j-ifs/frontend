/* let lbutton = document.querySelector('#login')
let cbutton = document.querySelector('#create')
let dbutton = document.querySelector('#delete')
let cdiv = document.querySelector('#cookie')
lbutton.addEventListener('click', login)
cbutton.addEventListener('click', createcookie)
dbutton.addEventListener('click', deletecookie) */

redirect()
/* cdiv.innerHTML = sessionStorage.getItem('logged') */

function redirect() {
  if (location.href != 'index.html') {
    if (sessionStorage.getItem('logged') != 'true') {
      location.replace('index.html')
      alert('me mama')
    }
  }
}

function createcookie() {
  alert('executando criar')
  sessionStorage.setItem('logged', 'false')
  cdiv.innerHTML = sessionStorage.getItem('logged')
}

function deletecookie() {
  alert('executando delete')
  sessionStorage.removeItem('logged')
  cdiv.innerHTML = sessionStorage.getItem('logged')
}

/* function login() {
  if (sessionStorage.getItem('logged') == 'false') {
    alert('executando login(turntrue)')
    sessionStorage.setItem('logged', 'true')
    cdiv.innerHTML = sessionStorage.getItem('logged')
  } else if (sessionStorage.getItem('logged') == 'true') {
    alert('executando login(turnfalse)')
    sessionStorage.setItem('logged', 'false')
    cdiv.innerHTML = sessionStorage.getItem('logged')
  }
} */
