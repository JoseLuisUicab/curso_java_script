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

  // revisa si un elemento existe en el carrito
  const existe = articulos.some((curso) => curso.id === informacion.id);
  if (existe) {
    const cursos = articulos.map((curso) => {
      if (curso.id === informacion.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulos = [...cursos];
  } else {
    articulos = [...articulos, informacion];
  }
  // agregar elementos al carrito

  carritoHTML();
}

// muestra la informacion en el carrito de compra

function carritoHTML(params) {
  // limpiamos el HTML
  limpiarHTML();
  articulos.array.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
    <img src="${imagen}" width="100">
    </td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
    `;
    contenedorcarrito.appendChild(row);
  });
}

// eleimia los curso del tbody
function limpiarHTML(params) {
  //contenedorcarrito.innerHTML = "";
  while (contenedorcarrito.firstChild) {
    contenedorcarrito.removeChild(contenedorcarrito.firstChild);
  }
}
