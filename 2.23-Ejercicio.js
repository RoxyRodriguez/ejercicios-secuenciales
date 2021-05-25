/**
 * El hotel “Cama Arena” requiere determinar lo que le debe cobrar a
un huésped por su estancia en una de sus habitaciones. Realice un
diagrama de flujo y pseudocódigo que representen el algoritmo para
determinar ese cobro.
 */
let dias = 0,
    costo = 0,
    total = 0;

dias = +prompt("Ingrese la Cantidad de Dias a Hospedarse");
costo = +prompt("Ingrese el Costo por Día");
total = dias * costo;
console.log(`El total a días es: ${dias} `);
console.log(`El costo por día es: ${costo} `);
console.log(`El total a pagar es: ${total} `);