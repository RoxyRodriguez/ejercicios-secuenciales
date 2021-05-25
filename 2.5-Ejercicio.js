/**
 * Pinturas “La brocha gorda” requiere determinar cuánto cobrar por
trabajos de pintura. Considere que se cobra por m2 y realice un diagrama 
de flujo y pseudocódigo que representen el algoritmo que le
permita ir generando presupuestos para cada cliente
 */
let metros = 0,
    precio = 0,
    total = 0;

metros = +prompt("Ingresa la Cantidad de Metros Cuadrados")
precio = +prompt("Ingrese el Precio del Metro Cuadrado")

total = metros * precio;
console.log(`Metros Requeridos: ${metros} \n El precio por Metro Cuadrado es: ${precio}`)
console.log(`El Total es: ${total}`)