// varibles
const carrito = document.querySelector("#carrito");
const contenedorcarrito = document.querySelector("#lista-carrito tbody");
const vaciarcarrritoBTN = document.querySelector("#vaciar-carrito");
const listacurso = document.querySelector("#lista-cursos");

cargarEventListener();

function cargarEventListener() {
  listacurso.addEventListener("click", agregarproducto);
}
function agregarproducto(e) {
  e.preventDefault();
  const selccionar = e.
  if (e.target.classList.contains("agregar-carrito")) {
    console.log("ggggggggggggg");
  }
}

// leer contenido del html para extrar la informacion
