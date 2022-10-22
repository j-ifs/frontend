navbar()

console.log(sessionStorage)

function navbar() {
  if (sessionStorage.getItem('user') === 'administrador') {
    nav.innerHTML = `<nav id="navigation">
          <div class="wrapper">
            <a class="logo" href="./main.html">
              <img src="./assets/ifs.png" width="175" height="50" alt="" />
            </a>
        
            <div class="menu">
              <ul>
                <li>
                  <a onclick="closeMenu()" href="./listadm.html">Administrador</a>
                </li>
                <li><a onclick="closeMenu()" href="./listjog.html">Jogador</a></li>
                <li>
                  <a onclick="closeMenu()" href="./listinsc.html">Inscrição</a>
                </li>
                <li>
                  <a onclick="closeMenu()" href="./listrep.html">Representante</a>
                </li>
        
              </ul>
        
              <a class="button" onclick="closeMenu()" href="./index.html">SAIR</a>
            </div>
        
            <button aria-expanded="false" aria-label="Abrir menu" onclick="openMenu()" class="open-menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 12H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 28L30 28" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button aria-expanded="true" aria-label="Fechar menu" onclick="closeMenu()" class="close-menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
    </nav>`
  } else if (sessionStorage.getItem('user') === 'representante') {
    nav.innerHTML = `<nav id="navigation">
          <div class="wrapper">
            <a class="logo" href="./main.html">
              <img src="./assets/ifs.png" width="175" height="50" alt="" />
            </a>
        
            <div class="menu">
              <ul>
                <li><a onclick="closeMenu()" href="./listjog.html">Jogador</a></li>
                <li>
                  <a onclick="closeMenu()" href="./listinsc.html">Inscrição</a>
                </li>
              </ul>
        
              <a class="button" onclick="closeMenu()" href="./index.html">SAIR</a>
            </div>
        
            <button aria-expanded="false" aria-label="Abrir menu" onclick="openMenu()" class="open-menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 12H30" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18 28L30 28" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button aria-expanded="true" aria-label="Fechar menu" onclick="closeMenu()" class="close-menu">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
    </nav>`
  }
}
