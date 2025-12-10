//errores de sintaxis

// le palabra = "Hola";

// palabra.toLowerCase(


//errores de referencia

// console.log(palabra);

{
    let nombre = "SOl";
    console.log(nombre);
}

// console.log(nombre);


//eror de tipo

const variable = "dsad";

// variable = "sadas";


//Objeto Error

const error = new Error('My Error');

console.log(error);
console.log(error.name);
console.log(error.message);
console.log(error.stack);


//lanzamiento objeto error

// throw new Error("Falló");

console.log("hola");

console.clear();
// try catch

try {
    throw new SyntaxError("Ups");

} catch (error) {
    if (error instanceof TypeError) console.log("TypeError")

    else if (error instanceof ReferenceError) console.log("ReferenceError")

    else if (error instanceof SyntaxError)console.log("SyntaxError")
        
    else console.log("error");
}

// console.log("hola");

