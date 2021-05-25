/**
 * Se requiere determinar el costo que tendrá realizar una llamada telefónica 
 * con base en el tiempo que dura la llamada y en el costo por
minuto. Realice un diagrama de flujo y pseudocódigo que representen el 
algoritmo para tal fin
 */
let tiempo = 0,
    costo = 0,
    total = 0;

tiempo = +prompt("Ingrese Tiempo de Duración de la Llamada en Minutos");
costo = +prompt("Ingrese el Costo por Minuto");
total = tiempo * costo;
console.log(`La Duración de la Llamada en Minutos es: ${tiempo} \n El costo por minuto es: ${costo}`);
console.log(`El Costo de su Llamada es: ${total}`);