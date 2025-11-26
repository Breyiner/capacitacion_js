// ciclos

// for (
//   //inicialización
//   let i = 1; // primer paso
//   //condicion
//   i < 5; // segundo paso
//   //incremento o decremento
//   i++ // cuarto paso
// ) {
//   console.log(i); // tercer paso
// }


// for (let i = 1; i < 10; i++) {

//   if (i == 5) continue; // salta la iteracion

//   if (i == 7) break;

//   console.log(i);
  
// }


const numeros = [1, 3, 5, 21, 2, 7, 13];

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// for (let i = 0; i < numeros.length; i++) 
// {
  
//   let residuo = numeros[i] % 2;

//   if (residuo == 0) {
//     console.log(numeros[i] % 2);
//     console.log(`${numeros[i]} es par`);
//   }
// }


// console.log(numeros);


// for (const valor of numeros) {
//   console.log(valor);
// }


// let count = 1;

// while (count <= 10) {
//   console.log(count);
//   count+=1;
// }


// let bandera = true;
// let numero = 1;

// while (bandera) {

//   if (numero == 100) {
//     bandera = false;
//   }
//   else {
//     console.log(numero);
//     numero++;
//   }
// }

let numero = 1;
do {

  console.log("hola");

} while (numero == 2);

while (numero == 2) {
  console.log("holaaaa");
}