/**
 * Realice el diagrama de flujo
 *  y pseudocódigo que representen el algoritmo 
 * para encontrar el área de un cuadrado.
 */
let lado = 0,
    total = 0;

lado = +prompt("Ingrese un Lado del Cuadrado");

total = lado * lado;

console.log(`El lado del Cuadrado es ${lado}`);
console.log(`El Area del Cuadrado es ${total}`);