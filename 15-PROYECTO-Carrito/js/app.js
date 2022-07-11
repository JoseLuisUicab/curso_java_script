// varibles
const carrito = document.querySelector("#carrito");
const contenedorcarrito = document.querySelector("#lista-carrito tbody");
const vaciarcarrritoBTN = document.querySelector("#vaciar-carrito");
const listacurso = document.querySelector("#lista-cursos");
let articulos = [];

cargarEventListener();

function cargarEventListener() {
  listacurso.addEventListener("click", agregarproducto);
}
function agregarproducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const selccionar = e.target.parentElement.parentElement;
    leerProducto(selccionar);
  }
}

// leer contenido del html al que se le hace clICK y extrar informacion
function leerProducto(curso) {
  // ojeto parea elselccionar contenido actaul
  const informacion = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  // agregar elementos al carrito
  articulos = [...articulos, informa];
}

// leer contenido del html para extrar la informacion
