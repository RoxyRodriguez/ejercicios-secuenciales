/**
 * Una empresa que contrata personal requiere determinar la edad de
las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el diagrama
de flujo y pseudocódigo que representen el algoritmo para solucionar
este problema.
 * */
let añonac = 0,
    añoactual = 0,
    edad = 0;

añonac = +prompt("Ingrese el año de Nacimiento");
añoactual = +prompt("Ingrese el año Actual");

edad = añoactual - añonac;

console.log(`Resultado`);
console.log(`Su edad es : ${edad}`);