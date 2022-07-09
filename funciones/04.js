// funciones deafault

/* function saludar(nombre = "", apellido = "") {
  console.log(`hola ${nombre} ${apellido}`);
}
saludar("jose", "luis"); */

// comunicar funcjones entre si

app();
function app() {
  console.log("inicializar app");
  dos();
}
function dos() {
  console.log("inicializar dos");
  auntentcarUsauario("pablo");
}

function auntentcarUsauario(usuario) {
  console.log("usuario..........espere");
  console.log(`usuario auntenticado exitosamente: ${usuario}`);
}
