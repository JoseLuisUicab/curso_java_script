//  Añadir Funciones en un Objeto
const reprodu = {
  reproducir: function (id) {
    console.log(`repreducir song id ${id}`);
  },
  pausar: function (params) {
    console.log(`pausando`);
  },
  borrar: function (id) {
    console.log(`borrando cancion........ ${id}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`creando playslist de ${nombre}`);
  },
  ReproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo playslist de ${nombre}`);
  },
};

reprodu.reproducir(30);
reprodu.pausar();
reprodu.borrar(30);
reprodu.crearPlaylist("heavy");
reprodu.crearPlaylist("rock 90s");
reprodu.ReproducirPlaylist("heavy");
