/**
 * Realice el diagrama de flujo y pseudocódigo que representen el algoritmo 
 * para determinar el promedio que obtendrá un alumno considerando que realiza
 * tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero
de 50%.
 */
let nota1 = 0,
    nota2 = 0,
    nota3 = 0,
    promedio = 0;

nota1 = +prompt("Ingrese La Nota del Primer Examen");
nota2 = +prompt("Ingrese La Nota del Segundo Examen");
nota3 = +prompt("Ingrese La Nota del Tercer Examen");

promedio = (nota1 * 0.25) + (nota2 * 0.25) + (nota3 * 0.5)

console.log(`La Nota 1 es: ${nota1}`);
console.log(`La Nota 2 es: ${nota2}`);
console.log(`La Nota 3 es: ${nota3}`);
console.log(`El promedio es: ${promedio}`);