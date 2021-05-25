/**
 * Realice un diagrama de flujo y pseudocódigo que 
 * representen el algoritmo para determinar aproximadamente cuántos meses, 
 * semanas, días y horas ha vivido una persona
 */
let edad = 0,
    meses = 0,
    semanas = 0,
    días = 0,
    horas = 0;

edad = +prompt("Ingrese su Edad")

meses = edad * 12;
semanas = meses * 4.34524;
dias = semanas * 7;
horas = dias * 24;

console.log(`Tu edad es ${edad}`);
console.log(`Los meses que has vivido son: ${meses}`);
console.log(`Las Semanas que has vivido son: ${semanas}`);
console.log(`Los días que has vivido son: ${dias}`);
console.log(`Las horas que has vivido son: ${horas}`);