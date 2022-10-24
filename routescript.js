redirect()

function redirect() {
  if (location.href != 'index.html') {
    if (sessionStorage.getItem('logged') != 'true') {
      location.replace('index.html')
    }
  }
}

function deletecookie() {
  sessionStorage.removeItem('logged')
  sessionStorage.removeItem('user')
}

