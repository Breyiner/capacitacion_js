let ahora = new Date();
console.log(ahora);

let fechaEspecifica = new Date("2025-02-20");
console.log(fechaEspecifica);

let fechaComponentes = new Date(2025,3,19,15,2,13); //yyyy/MM/dd hh:mm:ss
console.log(fechaComponentes);

let desdeUnix = new Date(0);
console.log(desdeUnix); //12343254365647657567

console.clear();

//metodos basicos
let fecha = new Date();
console.log(fecha);
console.log(fecha.getFullYear());
console.log(fecha.getMonth()); // Mes (0= enero hasta 11 = diciembre)
console.log(fecha.getDate());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.getTime());
console.log(fecha.toISOString());

fecha.setFullYear(2024);
fecha.setMonth(6);
fecha.setDate(20);
console.log(fecha);


let fecha1 = new Date("2024-05-12");
let fecha2 = new Date("2024-02-20");
console.log(fecha1 > fecha2);
console.log(fecha1 < fecha2);


console.log(fecha.toDateString());
console.log(fecha.toTimeString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

