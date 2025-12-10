// objeto console

console.log("HOla");
console.error("Ocurrió un error");
console.warn("Cuidado");
console.info("Esto es información");

const usuario = [
    {nombre: "Breyner", edad: 18},
    {nombre: "Sol", edad: 21}
];

console.table(usuario);

console.group("Información del programa");
console.error("Ocurrió un error");
console.warn("Cuidado");
console.groupEnd();

console.time("Tiempo de ejecución");
for(let i = 0; i <= 10000000; i++) {}
console.timeEnd("Tiempo de ejecución");

console.assert(10 > 10, "5 no es mayor que 10");

console.clear();
