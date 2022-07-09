// funcion que retorna algo
/* function sumar(a, b) {
  return a + b;
}
const hola = sumar(2, 18);
console.log(hola); */

let total = 0;
function agregar(precio) {
  return (total += precio);
}
function calcular(total) {
  return total * 1.15;
}

total = agregar(400);
total = agregar(400);
total = agregar(400);

const pagar = calcular(total);
console.log(total);
console.log(`total a pagar ${pagar}`);
