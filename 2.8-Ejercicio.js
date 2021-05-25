/**
 * Se requiere determinar el tiempo que tarda una persona en llegar de
una ciudad a otra en bicicleta, considerando que lleva una velocidad
constante. Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para tal fin
 */

let distancia = 0,
    velocidad = 0,
    tiempo = 0;
distancia = +prompt("Ingrese la Distancia")
velocidad = +prompt("Ingrese la Velocidad Constante en la que viaja por Hora")

tiempo = distancia / velocidad;

console.log(`La Distancia de una Ciudad a otra es:${distancia} kilometros \n y la Velocidad en la que va por hora es: ${velocidad} kilometros por hora`);
console.log(`El tiempo que tardara en llegar es:${tiempo} horas`);