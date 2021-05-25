/**
 * Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que ir por equis
número de días a la ciudad de Monterrey; los gastos que cubre la
empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. 
El monto debe estar desglosado para cada concepto. Realice un
diagrama de flujo y pseudocódigo que representen el algoritmo
que determine el monto del cheque.
 */
let dias = 0,
    costohotel = 0,
    costocomida = 0,
    otrosgastos = 100,
    gastohotel = 0,
    gastocomida = 0,
    gastoextra = 0,
    total = 0;

dias = +prompt("Ingrese el Número de Días a quedarse en la Ciudad");
costohotel = +prompt("Ingrese el Costo del Hotel por dia");
costocomida = +prompt("Ingrese el Costo de la Comida por día");
gastohotel = costohotel * dias;
gastocomida = costocomida * dias;
gastoextra = dias * 100;
total = gastohotel + gastocomida + gastoextra;

console.log(`La Cantidad de Dias a quedarse es: ${dias}`);
console.log(`El total del Costo del Hotel será: ${gastohotel}`);
console.log(`El total del Costo de la Comida será: ${gastocomida}`);
console.log(`El total del Costo Extra por día será: ${gastoextra}`);
console.log(`El total del Cheque será: ${total}`);