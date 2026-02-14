
const navHTML = `
  <nav>
    <div class="logo">Portafolio RED</div>
    <ul class="nav-links">
      <li><a href="./index.html">Inicio</a></li>
      <li class="dropdown">
        <a href="./modelos.html">Modelos y RED</a>
        <div class="dropdown-content">
          <a href="./seleccionando.html">Seleccionando Modelos</a>
          <a href="./recursos.html">Recursos Educativos</a>
        </div>
      </li>
      <li><a href="./rediseno.html">Rediseño</a></li>
      <li><a href="./aplicacion.html">Aplicación</a></li>
      <li><a href="./referencias.html">Referencias</a></li>
    </ul>
  </nav>
`;

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = navHTML;

    // Highlight active link
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath || (link.getAttribute('href') === '/index.html' && currentPath === '/')) {
        link.classList.add('active');
        // Also highlight parent if it's a dropdown item
        if (link.closest('.dropdown-content')) {
          link.closest('.dropdown').querySelector('a').classList.add('active');
        }
      }
    });
  }
});
