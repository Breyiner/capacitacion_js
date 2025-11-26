// Arreglos o Arrays

let arreglo1 = new Array();
let arreglo2 = []; // forma más usada

console.log(arreglo1);
console.log(arreglo2);

let frutas = ["pera", "manzana", "piña","banana"] // tres elementos;

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

frutas[1] = "guanabana";

console.log(frutas);

let fruta = "maracuyá";

console.log(frutas[3]);
frutas[4] = fruta;
console.log(frutas);

console.log(frutas.length);

console.log(frutas[-1]);

console.log(frutas[frutas.length - 1]);

console.log(frutas.at(-1));

let eliminado = frutas.pop();
console.log(frutas);
console.log(eliminado);

console.log(frutas.push("uvas"));
console.log(frutas);


console.log(frutas.shift());
console.log(frutas);

console.log(frutas.unshift("sandia"));
console.log(frutas);

console.clear();
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]);