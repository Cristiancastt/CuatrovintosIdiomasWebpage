document.addEventListener("DOMContentLoaded", function() {
  var botones = document.querySelectorAll('.accordion-button');
  botones.forEach(function(boton, index) {
    var anterior;
    boton.addEventListener("click", function(){
      var respuestas = document.querySelectorAll(".accordion-content"); // Corrección en el selector del método closest()
      respuestas[index].classList.toggle('is-hidden');
      respuestas[anterior].classList.toggle('is-hidden');
      anterior = index;
    });
  });
});


