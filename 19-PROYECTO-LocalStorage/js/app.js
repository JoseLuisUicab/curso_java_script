// variables

const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista-tweets");

let tweets = [];

// event listeners

eventlistener();
function eventlistener() {
  // cuando se garega un nuevo tweet
  formulario.addEventListener("submit", agregartweet);
  // cuando el docuemnto esta listado de
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    crearHtml();
  });
}
// functions

function agregartweet(e) {
  e.preventDefault();

  // textarea
  const tweet = document.querySelector("#tweet").value;
  // validamos vacios para
  if (tweet === "") {
    mostrarerror("no puedes subir un mensaje vacio");
    return; // evita que se ejecute mas lineas de codigo
  }
  // añadir el arregloa  los twites

  const tweetobj = {
    id: Date.now(),
    tweet,
  };
  tweets = [...tweets, tweetobj];

  // una vez agregadi cear el HTML
  crearHtml();

  // reinciar formulario
  formulario.reset();
}

// mostrar mensajes para
function mostrarerror(error) {
  const mensajeerror = document.createElement("p");
  mensajeerror.textContent = error;
  mensajeerror.classList.add("error");

  // insertamos en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeerror);
  setTimeout(() => {
    mensajeerror.remove();
  }, 3000);
}

function crearHtml(params) {
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      // boton de eliminar
      const eliminar = document.createElement("a");
      eliminar.classList.add("borrar-tweet");
      eliminar.innerText = "X";

      // crear HTML
      const li = document.createElement("li");
      // añaDIR TEXTO
      li.innerText = tweet.tweet;
      li.appendChild(eliminar);

      // insertar en el HTML
      lista.appendChild(li);

      // añadir la funcion de eliminar
      eliminar.onclick = () => {
        borrartweet(tweet.id);
      };
    });
  }
  sincronizarStorage();
}
// agregar los tweets a  localStorage
function sincronizarStorage(params) {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
// boras tweet para
function borrartweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHtml();
}
// limpiar HTML
function limpiarHTML() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}
