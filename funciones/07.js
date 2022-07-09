/* // funcion de flecha
const aprender = function () {
  console.log("ja");
};

const aprender2 = () => {
  console.log("jad");
};

aprender2(); */

const aprender2 = (tecnologico, tecnologico2) =>
  `aprendiendo ${tecnologico} y ${tecnologico2}`;
console.log(aprender2(`javascript`, `NODE.js`));

// usar funcion de flecha en map y foreach

const car = [
  { nombre: "monitor", precio: 500 },
  { nombre: "tele", precio: 500 },
  { nombre: "xbox", precio: 500 },
  { nombre: "tv", precio: 500 },
];

/* for (var i = 0; i < car.length; i++) {
  console.log(`${car[i].nombre} - precio: ${car[i].precio}`);
} */

car.forEach((producto) => {
  console.log(`${producto.nombre} - precio: ${producto.precio}`);
});

// map se diferencia del foreach al crear un nuevo arreglo
car.map((producto) => {
  console.log(`${producto.nombre} - precio: ${producto.precio}`);
});
