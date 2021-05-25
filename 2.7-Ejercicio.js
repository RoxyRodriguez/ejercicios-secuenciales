/**
 * La compañía de autobuses “La curva loca” requiere determinar el 
 * costo que tendrá el boleto de un viaje sencillo, esto basado en los 
 * kilómetros por recorrer y en el costo por kilómetro. Realice un diagrama de
flujo y pseudocódigo que representen el algoritmo para tal fin.
 */
let kilometros = 0,
    costo = 0,
    precio = 0;

kilometros = +prompt("Ingrese los kilometros a recorrer");
costo = +prompt("Ingrese el Costo por Kilómetro");

precio = kilometros * costo;

console.log(`Los kilometros a recorrer son: ${kilometros} El Costo por Kilometros es: ${costo}`);
console.log(`El Costo de Su Boleto es: ${precio}`);