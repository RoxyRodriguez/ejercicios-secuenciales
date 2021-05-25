/**
 * Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para 
 * determinar cuánto dinero ahorra una persona en un año si considera que cada 
 * semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no cambia el sueldo).
 */
let sueldo = 0,
    ahorrosemana = 0,
    ahorromensual = 0,
    ahorroanual = 0;

sueldo = +prompt("Ingrese el Sueldo");

ahorrosemana = sueldo * 0.15;
ahorromensual = ahorrosemana * 4;
ahorroanual = ahorromensual * 12;

console.log(`Tu ahorro semanal es: ${ahorrosemana}`);
console.log(`Tu ahorro mensual es: ${ahorromensual}`);
console.log(`Tu ahorro al año es: ${ahorroanual}`);