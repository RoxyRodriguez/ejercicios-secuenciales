/**
 * Se desea calcular la potencia eléctrica de circuito de la figura 2.6. 
 * Realice un diagrama de flujo y el pseudocódigo que representen el algoritmo para 
 * resolver el problema. Considere que: P = V*I y V = R*I.
 */

let I = 0,
    Voltaje = 0,
    R = 4,
    Potencia = 0;

I = +prompt("Ingrese la Corriente");

Voltaje = I * R;
Potencia = Voltaje * I;

console.log(`La Corriente es: ${I}`);
console.log(`El Voltaje es: ${Voltaje}`);
console.log(`La Potencia es: ${Potencia}`);