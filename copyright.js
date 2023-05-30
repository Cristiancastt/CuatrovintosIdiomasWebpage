const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `&copy; ${currentYear} Todos los derechos reservados por Cuatrovientos Idiomas.`;
window.addEventListener('load', function() {
    const pageLoader = document.getElementById('page-loader');
    const progressBar = pageLoader.querySelector('progress');
    
    function updateProgressBar() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      progressBar.value = progress;
    }
    function hidePageLoader() {
      pageLoader.style.display = 'none';
    }
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    window.addEventListener('load', hidePageLoader);
    pageLoader.addEventListener('click', scrollToTop);
  });
  




var imagenes = document.getElementsByClassName('imagenes');
for (var i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function () {
    var modal = document.getElementById('miModal');
    var modalImagen = document.getElementById('modalImagen');
    var descargarImagen = document.getElementById('descargarImagen');
    var imagenURL = this.getAttribute('src');
    modalImagen.setAttribute('src', imagenURL);
    descargarImagen.setAttribute('href', imagenURL);
    modal.classList.add('is-active');
  });
}

function cerrarModal() {
  var modal = document.getElementById('miModal');
  modal.classList.remove('is-active');
}