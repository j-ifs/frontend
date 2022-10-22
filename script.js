import { loginSuccess, loginError } from './popup.js'

var formField = document.querySelector('.formLogin')

function loginRequiriments(event) {
  let usernameValue = document.getElementById('usuario').value
  let passwordValue = document.getElementById('senha').value

  event.preventDefault()

  axios
    .post('api/user/login.php', {
      user: {
        username: usernameValue,
        password: passwordValue
      }
    })
    .then(function (response) {
      loginSuccess()
      sessionStorage.setItem('logged', 'true')
      location.href = 'main.html'
      axios.get('api/user/index.php', {})
      .then(function (response) {
        const data = response.data
        const nav = document.getElementById('nav')
        for (let user of data.users) {
          if (user.role === 'administrador') {
            sessionStorage.setItem('user', 'administrador')
          } else if (user.role === 'representante') {
            sessionStorage.setItem('user', 'representante')
          }
        }
      })
    })
    .catch(function (error) {
      loginError()
    })
}

formField.addEventListener('submit', loginRequiriments)
