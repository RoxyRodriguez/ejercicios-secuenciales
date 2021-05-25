/**
 * Se requiere determinar la hipotenusa de un triángulo rectángulo.
¿Cómo sería el diagrama de flujo y el pseudocódigo que representen
el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene
que: C2 = A2 + B2.
 */
let cateto1 = 0,
    cateto2 = 0,
    hipotenusa;

cateto1 = +prompt("Ingrese Cateto 1");
cateto2 = +prompt("Ingrese Cateto 2");

hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
console.log(`El valor de Cateto 1 es: ${cateto1} \n El valor del Cateto  es: ${cateto2}`)
console.log(`La Hipotenusa es: ${hipotenusa}`)