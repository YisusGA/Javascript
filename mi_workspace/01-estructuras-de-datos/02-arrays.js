//Este es un fichero JS donde haremos pruebas de arrays

let coches = ["Ford", "Seat", "Fiat"];

//Fijaos que se muestra según el orden en el que lo hemos creado
console.log(coches);

//Mostramos sólo uno de ellos, el de la posición 1
console.log(coches[1]);

//Mostramos sólo uno de ellos, el dde la posición 0 (el primero)
console.log(coches[0]);

/*
0 -Ford
1 - Seat
2 .Fiat

*/

//Agregar elementos
coches[3] = "Kia";

//Fijarse en la longitud del array después de poner esto
coches[10] = "Citroen";

//Los arrays son Objetos. Con typeof, vemso el tipo
console.log(typeof coches);

console.log(coches.length);

coches.push("Ferrari");

console.log(coches);

coches.splice(4, 1);

console.log(coches);

coches.splice(4, 5);

console.log(coches);