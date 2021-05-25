/**
 * Un estacionamiento requiere determinar el cobro que debe aplicar a
las personas que lo utilizan. Considere que el cobro es con base en las
horas que lo disponen y que las fracciones de hora se toman como
completas y realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo que permita determinar el cobro.
 */
let horas = 0,
    costo = 0,
    total = 0;

horas = +prompt("Ingrese las Horas:");
costo = +prompt("Ingrese el Costo de la Hora");

total = (Math.round(horas) * costo)
console.log(`Las horas que Utilizo son: ${horas} y el costo es: ${costo}`)
console.log(`El costo total es: ${total}`);