// varibles = [];

const btnenviar = document.querySelector("#enviar");
const btnreset = document.querySelector("#reseBTN");
const formulario = document.querySelector("#enviar-mail");
// varibles para campos de formulario
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

function eventListeners(params) {
  // cuando arranca la app
  document.addEventListener("DOMContentLoaded", iniciar);
  // campos del formulario
  email.addEventListener("blur", validarformulario);
  asunto.addEventListener("blur", validarformulario);
  mensaje.addEventListener("blur", validarformulario);
  btnreset.addEventListener("click", resetar);
  formulario.addEventListener("submit", enviarFormua);
}
// funciones

function iniciar() {
  btnenviar.disabled = true;
  btnenviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validarformulario(e) {
  if (e.target.value.length > 0) {
    // elimmar errores
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    /*  e.target.style.borderBottom = "2px solid red"; */
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarerror("todos campos son obligatorios");
  }
  if (e.target.type == "email") {
    if (reg.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarerror("email no valido");
    }
  }

  if (
    reg.test(email.value) !== "" &&
    asunto.value !== "" &&
    mensaje.value !== ""
  ) {
    btnenviar.disabled = false;
    btnenviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}
function mostrarerror(mensaje) {
  const mensajeE = document.createElement("p");
  mensajeE.textContent = mensaje;
  mensajeE.classList.add(
    "border",
    "border-red-500",
    "background-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const er = document.querySelectorAll(".error");
  if (er.length === 0) {
    formulario.appendChild(mensajeE);
  }
}

function enviarFormua(e) {
  e.preventDefault();
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  // despues de 3 segundos ocultar spinner para
  setTimeout(() => {
    spinner.style.display = "none";
    const parrafo = document.createElement("p");
    parrafo.textContent = "mensaje enviado correctamente";
    parrafo.classList.add(
      "text-center",
      "my-10",
      "p-2",
      "bg-green-500",
      "text-white",
      "font-bold",
      "uppercase"
    );
    formulario.insertBefore(parrafo, spinner);
    setTimeout(() => {
      parrafo.remove();
      resetar();
    }, 5000);
  }, 3000);
}

function resetar(params) {
  formulario.reset();
  iniciar();
}
