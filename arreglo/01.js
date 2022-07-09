const car = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tele", precio: 500 },
  { nombre: "xbox", precio: 500 },
  { nombre: "tv", precio: 500 },
];

/* for (var i = 0; i < car.length; i++) {
  console.log(`${car[i].nombre} - precio: ${car[i].precio}`);
} */

car.forEach(function (producto) {
  console.log(`${producto.nombre} - precio: ${producto.precio}`);
});

// map se diferencia del foreach al crear un nuevo arreglo 
car.map(function (producto) {
  console.log(`${producto.nombre} - precio: ${producto.precio}`);
});
