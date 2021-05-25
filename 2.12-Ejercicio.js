/**
 * Realice un diagrama de flujo y pseudocódigo que representen el
algoritmo para determinar cuánto pagará finalmente una persona
por un artículo equis, considerando que tiene un descuento de 20%,
y debe pagar 15% de IVA (debe mostrar el precio con descuento y el
precio final).
 */
let precio = 0,
    descuento = 0.20,
    iva = 0.15,
    subtotal = 0,
    total = 0;

precio = +prompt("Ingrese el Precio del Producto");

subtotal = precio - (precio * descuento);
total = subtotal + (subtotal * iva);
console.log(`El Precio de su Producto es: ${precio}`)
console.log(`Aplicando el 20% de Dcto. \n el Subotal sería:  ${subtotal}`);
console.log(`Agregando el 15% de IVA`);
console.log(`El Total a Pagar es: ${total}`);