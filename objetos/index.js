const objeto = new Object();

const objetoLiteral = {};

const jugador = {
  nombre: "Edixon",
  vida: 100,
  poder: 6
};

console.log(jugador);

console.log(jugador.nombre); //notacion de punto
console.log(jugador.vida);

console.log(jugador["nombre"]);
console.log(jugador["vida"]); //notacion de corchetes

console.log(Object.keys(jugador));

for (const key in jugador) {
  console.log(typeof(key));
  console.log(jugador.key);
  console.log(jugador[key]);
}

jugador.velocidad = 3;
console.log(jugador);

jugador['hambre'] = 0;
console.log(jugador);

let nombreCampo = "correo";

jugador[nombreCampo] = "dadsds";
console.log(jugador);



console.clear();
console.log(jugador);

jugador.velocidad = 19;
console.log(jugador);

delete jugador.correo;
console.log(jugador);

console.clear();


const usuario = {

  nombre: "Kevin",
  lenguajes: ["html", "css", "js", "sql"],
  direccion: {
    calle: "12b",
    barrio: "san martin"
  },
  saludar: () => {
    console.log("Hola");
  },
  cambiarNombre: () => {
    usuario.nombre = "Edixon";
  }
};


console.log(usuario.lenguajes[0]);
console.log(usuario['direccion']['barrio']);
console.log(usuario['direccion']['barrio']);

usuario.saludar();

console.log(usuario);

usuario.cambiarNombre();

console.log(usuario);


console.clear();


const casa = {
  cocina: ["comedor", "estufa"],
  jardin: "flores",
  habitacion: {
    cama: "almohada"
  }
}

let { jardin, cocina, habitacion: { cama } } = casa;
// let nombreVariable = valor;

console.log(casa.jardin);
console.log(jardin);
console.log(cocina[0]);
// console.log(habitacion);
console.log(cama);


const arreglo = [10, 21, [39, 3, 12, 14], 4, 5, 6, 7];

let [a, b, [c, d, e, f]] = arreglo;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
