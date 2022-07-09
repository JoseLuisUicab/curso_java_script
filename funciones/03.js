// funciones nativas en js

// funciones diferencias metodo y funcion
const n1 = 30;
const n2 = "20";

console.log(parseInt(n2)); // funcion
console.log(n1.toString());

//
function sumar(a, b) {
  console.log(a + b);
}
sumar(1, 2); // argumentos son valores reales

function saludar(nombre, apellido) {
  console.log(`hola ${nombre} ${apellido}`);
}
saludar("jose","luis")
