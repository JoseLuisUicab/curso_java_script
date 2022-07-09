const car = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tele", precio: 500, descuento: true },
  { nombre: "xbox", precio: 500 },
  { nombre: "tv", precio: 500 },
];

console.log(car.length);

// break terminar algo
/* for (let index = 0; index <= 10; index++) {
  if (index === 5) {
    console.log("aqui para");
    continue;
  }

  console.log(`numero ${index}`);
} */
/* for (let index = 0; index < car.length; index++) {
  if (car[index].descuento) {
    console.log(`articulo ${car[index].nombre} tiene descuento`);
    continue;
  }

  console.log(car[index].nombre);
}
 */

