const form = document.querySelector("form");
const boton = document.getElementById("botonEnviar");
console.log("Script Enlazado 😈");

const email = document.getElementById("email");
const emailError = document.getElementById("errorEmail");
const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function comprobarEmail() {
  if (patronEmail.test(email.value)) {
    email.classList.remove("is-danger");
    email.classList.add("is-success");
    emailError.textContent = "";
    return true;
  } else {
    email.classList.add("is-danger");
    emailError.textContent =
      "Porfavor, introduce un correo electrónico correcto.";
    return false;
  }
}

const patronTelefono = /^(\+34|0034|34|\+34 )?[6789]\d{8}$/;
const telefono = document.getElementById("telefono");
const telefonoError = document.getElementById("telefonoError");
function comprobarTelefono() {
  if (patronTelefono.test(telefono.value)) {
    telefono.classList.remove("is-danger");
    telefono.classList.add("is-success");
    telefonoError.textContent = "";
    return true;
  } else {
    telefono.classList.add("is-danger");
    telefonoError.textContent =
      "Porfavor, introduce un número de teléfono correcto.";
    return false;
  }
}

const patronCP = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
const cp = document.getElementById("cp");
const cpError = document.getElementById("cpError");
function comprobarCP() {
  if (patronCP.test(cp.value)) {
    cp.classList.remove("is-danger");
    cp.classList.add("is-success");
    cpError.textContent = "";
    return true;
  } else {
    cp.classList.add("is-danger");
    cpError.textContent = "Porfavor, introduce un código postal correcto.";
    return false;
  }
}

const patronDNI = /^\d{8}[A-Z]$/;
const dni = document.getElementById("dni");
const dniError = document.getElementById("dniError");

function comprobarDNI() {
  if (patronDNI.test(dni.value)) {
    const numero = dni.value.substr(0, dni.value.length - 1);
    const letra = dni.value.substr(dni.value.length - 1, 1);
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    const index = numero % 23;
    if (letra.toUpperCase() === letras.charAt(index)) {
      dni.classList.remove("is-danger");
      dni.classList.add("is-success");
      dniError.textContent = "";
      return true;
    } else {
      dni.classList.add("is-danger");
      dniError.textContent = "Por favor, introduce un número de DNI real.";
      return false;
    }
  } else {
    dni.classList.add("is-danger");
    dniError.textContent = "Por favor, introduce un número de DNI válido.";
    return false;
  }
}
const chError = document.getElementById("chError");
function validarTerminos() {
  const checkbox = document.getElementById("terminos");
  if (checkbox.checked) {
    chError.textContent = "";
    return true;
  } else {
    //alert("Debe aceptar los términos y condiciones para continuar.");
    chError.textContent =
      "Debe aceptar los términos y condiciones para continuar.";
    return false;
  }
}

/*Asier*/
//Con dos funciones impido o permito que se visualize los elementos que contengan la clase .ocultar
//depiendo de si han clickado un radio button diferenciados gracias a su id.
const radioIngles = document.getElementById("ingles");
radioIngles.addEventListener("click", function () {
  var niveles = document.getElementsByClassName("ocultar"); //TODO Hidden
  Array.from(niveles).forEach((element) => {
    element.style.display = "list-item";
  });
});

const radioFrances = document.getElementById("frances");
radioFrances.addEventListener("click", function () {
  var niveles = document.getElementsByClassName("ocultar"); //TODO Hidden
  Array.from(niveles).forEach((element) => {
    element.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var seccionDireccion = document.querySelector(".direccion");
  var inputsDireccion = seccionDireccion.querySelectorAll('.input');
  inputsDireccion.forEach(function(campo, index) {
    campo.addEventListener("input", function(){
      const valor = campo.value.trim(); // Trim quita espacios en blanco
      var ayudas = seccionDireccion.getElementsByClassName("help");
      campo.classList.add("is-danger");
      var nombreCampo = campo.name;
      switch (nombreCampo) {
        case "direccion":
          const caracteresDireccion = /^[a-zA-Z0-9\s\-\.,]+$/;
          if (!caracteresDireccion.test(valor) || valor.length < 10) {
            ayudas[index].textContent = "Dirección no válida";
          }else{
            campo.classList.remove("is-danger");
            campo.classList.add("is-success");
            ayudas[index].textContent = "";
          }
          break;
        case "ciudadNacimiento":
          const caracteresCiudad = /^[a-zA-ZñÑ\s]+$/;
          if ((!caracteresCiudad.test(valor)) || (valor.length < 5)) {
            ayudas[index].textContent = "Provincia no válida";
          }else{
            campo.classList.remove("is-danger");
            campo.classList.add("is-success");
            ayudas[index].textContent = "";
          }
          break;
        case "pais":
          const caracteresPais = /^[a-zA-ZñÑ\s]+$/;
          if ((!caracteresPais.test(valor)) || (valor.length < 5)) {
            ayudas[index].textContent = "País no válida";
          }else{
            campo.classList.remove("is-danger");
            campo.classList.add("is-success");
            ayudas[index].textContent = "";
          }
          break;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("myForm");
  var genderError = document.getElementById("genderError");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var genderInputs = form.elements.gender;
    var selectedGender = false;

    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        selectedGender = true;
        break;
      }
    }

    if (!selectedGender) {
      genderError.textContent = "Please select a gender";
    } else {
      genderError.textContent = ""; // Borra el mensaje de error si está seleccionado
      // Aquí puedes realizar otras acciones, como enviar el formulario
      // form.submit();
    }
  });
});



//Dan**********************************
var nombreInput = document.getElementById("nombre");

function validarNombre() {
  var nombre = nombreInput.value.trim();
  var palabras = nombre.split(" ");
  if (palabras.length >= 2) {
    var palabrasValidas = palabras.filter(function (palabra) {
      return palabra.length >= 3;
    });
    if (palabrasValidas.length >= 2) {
      return true;
    }
  }
  return false;
}

const nombreError = document.getElementById("nombreError");
nombreInput.addEventListener("input", function () {
  if (!validarNombre()) {
    nombreInput.focus();
    nombreError.textContent =
      "El nombre debe contener al menos dos palabras. Cada palabra debe tener al menos 3 letras.";
    nombreInput.classList.add("is-danger");
  } else {
    nombreError.textContent = "";
    nombreInput.classList.remove("is-danger");
    nombreInput.classList.add("is-success");
  }
});

//******Fecha */

var fechaInput = document.getElementById("fecha");
var fechaError = document.getElementById("fechaError");

fechaInput.addEventListener("input", function () {
  var fechaIntroducida = new Date(fechaInput.value);
  var hoy = new Date();

  var edad = hoy.getFullYear() - fechaIntroducida.getFullYear();
  var meses = hoy.getMonth() - fechaIntroducida.getMonth();
  var dias = hoy.getDate() - fechaIntroducida.getDate();

  if (meses < 0 || (meses === 0 && dias < 0)) {
    edad--;
  }

  if (edad < 12) {
    fechaError.textContent = "Debes tener al menos 12 años";
    fechaInput.classList.add("is-danger");
  } else {
    fechaInput.classList.remove("is-danger");
    fechaInput.classList.add("is-success");
    fechaError.textContent = "";
  }
});
//****************************************/

const success = document.getElementById("success");
const error = document.getElementById("error");
function validarFormulario() {
  if (!validarNombre()) {
    return false;
  }else{
    nombreInput.classList.add("is-success");
  }

  if (!comprobarEmail()) {
    return false;
  }
  if (!comprobarTelefono()) {
    return false;
  }

  if (!comprobarDNI()) {
    return false;
  }

  if (!comprobarCP()) {
    return false;
  }

  if (!validarTerminos()) {
    return false;
  }
  return true;
}
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se envíe el formulario automáticamente
  if (validarFormulario()) {
    success.classList.remove("is-hidden");
    error.classList.add("is-hidden");
    //form.submit();
  } else {
    success.classList.add("is-hidden");
    error.classList.remove("is-hidden");
  }
});

/*
//Script No dejar abandonar pagina 
// Agregar un controlador de eventos antes de que la página se recargue
window.addEventListener('beforeunload', function (event) {
  // Cancelar la acción predeterminada
  event.preventDefault();
  // Mensaje opcional para mostrar al usuario antes de salir de la página
  event.returnValue = '¿Seguro que quieres abandonar esta página?';
});
*/
