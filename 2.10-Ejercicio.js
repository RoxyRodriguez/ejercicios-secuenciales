/**
 * La CONAGUA requiere determinar el pago que debe realizar una
persona por el total de metros cúbicos que consume de agua. 
Realice un diagrama de flujo y pseudocódigo que representen el algoritmo 
que permita determinar ese pago.
 */
let metrocubicos = 0,
    costo = 0,
    total = 0;

metrocubicos = +prompt("Ingrese la Cantidad de metros Cúbicos Consumidos");
costo = +prompt("Ingrese el Costo del Metro Cúbico");

total = metrocubicos * costo

console.log(`La Cantidad Consumida en Metros Cúbicos es: ${metrocubicos} \n El Costo por Metro Cúbico es: ${costo}`);
console.log(`El total a Pagar es: ${total}`);