// estructuras condicionales

// let nota = 5;

// if (nota >= 7) {
//   console.log('pasó');
// }
// else {
//   console.log('perdió');
// }


// let edad = 75;

// if (edad >= 60) {
//   console.log("Eres de la tercera edad");
// }

// else if (edad >= 18) {
//   console.log('eres adulto');
// }

// else {
//   console.log('niño');
// }



//switch

// let variable = 10;

// switch (variable) {

//   case 5:
//     console.log("soy un 5");
//     break;

//   case 3:
//     console.log("soy un 3");
//     break;

//   case 1:
//     console.log("soy un 1");
//     break;

//   case 50:
//     console.log("soy un 50");
//     break;
  
//   default:
//     console.log('no aplica en ninguna condicion');
// }


// let dia = true;

// switch (typeof(dia)) {

//   case "string":
//     console.log("string");
//     break;

//   case "number":
//     console.log("Number");
//     break;

//   case "boolean":
//     console.log("Boolean");
//     break;

//   default:
//     console.log('no aplica en ninguna condicion');
// }


// let valor = parseInt(prompt("ingrese texto:"));

// console.log(typeof(valor));


// console.log(valor+2);


// let edad = parseInt(prompt("Ingrese su edad en número:"));

// let ingresos = parseFloat(prompt("Digite sus ingresos mensuales:"));

// debe ser mayor de 16 años Y ingresos mayores o iguales a 1000


// primera forma

// if(edad > 16) {
//     if(ingresos >= 1000) {
//         console.log("Debe tributar");
//     }
//     else {
//         console.log("No debe tributar");
//     }
// }
// else {
//     console.log("No debe tributar");
// }


// // segunda forma
// if(edad > 16 || ingresos >= 1000) {
//     console.log('Debe tributar');
    
// }
// else {
//     console.log('No debe tributar');
// }




// console.log("v" > "C");
//  A, B, C... Z, a, b, c... z

/**
 * los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.
 */

// Grupos: A y B 

//A: Mujeres con Nombre anterior a M Y hombre con nombre despues de N

//B: El resto de personas























let nombre = prompt("Ingrese su nombre:").trim();

let sexo = prompt("Ingrese su sexo ((m) masculino o (f) femenino):").trim();

if(sexo.toLowerCase() == "f" && nombre[0].toLowerCase() < "m" || sexo.toLowerCase() == "m" && nombre[0].toLowerCase() > "n") {
    console.log("Eres del grupo A");
}
else {
    console.log("eres del grupo B");
}