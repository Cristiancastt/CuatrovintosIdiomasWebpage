
/*function frances(){
    dropdown('frances', 'ingles')
    document.querySelector("#idioma").innerText = "Prueba de Nivel Francés";
    var botonIdioma = document.querySelector("#formIdioma");
    botonIdioma.innerText = "FRANCÉS";
    botonIdioma.href = "https://docs.google.com/forms/d/e/1FAIpQLScy9ziI48_1lyFb-oakgfsHs0i7mc6srBJo8Ygn7N6cMavUsQ/viewform"
}

function ingles(){
    dropdown('ingles', 'frances')
    document.querySelector("#idioma").innerText = "Prueba de Nivel Inglés";
    var botonIdioma = document.querySelector("#formIdioma");
    botonIdioma.innerText = "INGLÉS"
    botonIdioma.href = "https://docs.google.com/forms/d/e/1FAIpQLSd5cUvX4QLajZPfalOm0PSDf6PZ-tUiX-A6ffwOqzl_yIl_-g/viewform"
    hanAccedido = true;    
}

function desbloquear(){
    var enlaceIdioma = document.getElementsByClassName("card-footer-item matric.ula");
    var variable = document.querySelector(".card-footer-item.matricula");
    for (let i = 0; i < enlaceIdioma.length; i++) {
        alert([i]);
        enlaceIdioma.style.color = "black";
    }
}

function dropdown(activo, desactivo){
    document.getElementById(activo).className="dropdown-item is-active";
    document.getElementById(desactivo).className="dropdown-item";
}*/

/*Asier*/



/**dan */
document.addEventListener("DOMContentLoaded", function() {
    var desencadenantes = document.querySelectorAll(".texto-desencadenante");
    desencadenantes.forEach(function(desencadenante) {
      desencadenante.addEventListener("click", function() {
        var textoOculto = this.nextElementSibling;
        textoOculto.classList.toggle("hidden");
      });
    });
  });

  function toggleCard(cardNumber) {

    const allContent = document.querySelectorAll('.additional-content');
    allContent.forEach(content => {
        content.classList.add('hidden');
    });


    const cardContent = document.querySelector(`#additionalContent${cardNumber}`);
    cardContent.classList.remove('hidden');
}
/**......................... */











