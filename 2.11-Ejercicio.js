/**
 * La compañía de luz y sombras (CLS) requiere determinar el pago
que debe realizar una persona por el consumo de energía eléctrica,
la cual se mide en kilowatts (KW). Realice un diagrama de flujo y
pseudocódigo que representen el algoritmo que permita determinar ese pago.
 */
let consumo = 0,
    costo = 0,
    precio = 0;

consumo = +prompt("Ingrese el Consumo de Energía Eléctrica en Kw");
costo = +prompt("Ingrese el Costo por Kw")
precio = consumo * costo;

console.log(`Su Consumo es : ${consumo} \n El Costo por Kw es: ${costo}`);
console.log(`El precio por su Consumo es : ${precio} `);