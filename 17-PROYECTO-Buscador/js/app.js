const resultado = document.querySelector("#resultado");

document.addEventListener("DomContentLoaded", () => {
  mostrarcoches();
});

function mostrarcoches() {
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
