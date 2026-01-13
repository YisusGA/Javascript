//Datos fijos (const)
const nombre = "Jesús";
const apellido = "Gómez";
const anioNacimiento = 1993;

//Datos variables (let)
let anioActual = 2026;
let edad;

//Operaciones con números
edad = anioActual - anioNacimiento;
console.log(edad - 1);

//Operaciones matemáticas
let numero1 = 10; 
let numero2 = 5;
console.log("Suma: " + (numero1 + numero2) + ", Resta: " + (numero1 - numero2) + ", Multiplicación: " + (numero1 * numero2) + ", División: " + (numero1 / numero2));

//Concatenación de cadenas
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//Mensaje final
console.log("Hola me llamo " + nombreCompleto + " y tengo " + edad + " años.")