let hoy = new Date()

console.log(hoy)//Hoy

// Año
console.log(hoy.getFullYear());

// Mes, comienzan desde 0 - Enero, 1 - Febrero
console.log(hoy.getMonth());

// Dia
console.log(hoy.getDate());

let navidad = new Date(2021, 11, 25);

console.log(navidad);

let cuantoFaltaParaNavidad = navidad - hoy;
console.log(cuantoFaltaParaNavidad);

let diasParaNavidad = cuantoFaltaParaNavidad /1000 / 60 / 60 / 24

console.log(diasParaNavidad);