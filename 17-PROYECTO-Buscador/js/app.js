const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimum = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
// contenedor para los resultados
const resultado = document.querySelector("#resultado");
// obtenemos el año actual
const max = new Date().getFullYear();
const min = max - 15;

// genear un objeto de busqueda
const busqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
  llenarselect();
});

marca.addEventListener("change", (e) => {
  busqueda.marca = e.target.value;

  filtrar();
});
year.addEventListener("change", (e) => {
  busqueda.year = parseInt(e.target.value);
  filtrar();
});
minimo.addEventListener("change", (e) => {
  busqueda.minimo = e.target.value;
  filtrar();
});
maximo.addEventListener("change", (e) => {
  busqueda.maximo = e.target.value;
  filtrar();
});
puertas.addEventListener("change", (e) => {
  busqueda.puertas = parseInt(e.target.value);
  filtrar();
});
transmision.addEventListener("change", (e) => {
  busqueda.transmision = e.target.value;
  filtrar();
});
color.addEventListener("change", (e) => {
  busqueda.color = e.target.value;
  filtrar();
});

function mostrarAutos(autos) {
  limpiar();
  // usamos un foreach para iterar el arreglo de objetos
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = ` 
      ${marca}
     ${modelo}
     ${year}
     ${puertas}
     ${transmision}
    ${precio}
    ${color}
    `;
    resultado.appendChild(autoHTML);
  });
}

// limpair HTML
function limpiar(params) {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function llenarselect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}

// funcion que filra en base a la bsuqueda
function filtrar() {
  const resultado = autos
    .filter(filtrarmarca)
    .filter(filtraryear)
    .filter(filtrarMin)
    .filter(filtrarMax)
    .filter(filtrarpuertas)
    .filter(filtrartransmision)
    .filter(filtrarcolor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noencontrada();
  }
}
function noencontrada() {
  limpiar();
  const noencontrada = document.createElement("div");
  noencontrada.classList.add("alerta", "error");
  noencontrada.textContent =
    "no hay resultados, intente de nuevo otra busqueda";
  resultado.appendChild(noencontrada);
}

function filtrarmarca(auto) {
  const { marca } = busqueda;
  if (busqueda.marca) {
    return auto.marca === marca;
  }
  return auto;
}

function filtraryear(auto) {
  const { year } = busqueda;
  if (busqueda.year) {
    return auto.year === year;
  }
  return auto;
}
function filtrarMin(auto) {
  const { minimo } = busqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
function filtrarMax(auto) {
  const { maximo } = busqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarpuertas(auto) {
  const { puertas } = busqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
function filtrartransmision(auto) {
  const { transmision } = busqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarcolor(auto) {
  const { color } = busqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
