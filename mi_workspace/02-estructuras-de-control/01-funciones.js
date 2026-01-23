//Ejemplo para probar el funcionamiento de las funciones en JavaScript

function mostrarMensaje(nombre) { //Se le pasa como parámetro una variable llamada nombre
    console.log("Bienvendio a JavaSctipt " + nombre);
}

mostrarMensaje("Joan"); //Y al llamar a la función, se le pasa el dato de la variable nombre

//Parámetros de entrada y devolución de un valor

function multiplica(a, b) {
    return a * b;
}

let valor1 = multiplica(10, 2);
console.log("El resultado de la multiplicación es: " + valor1);

//Determinar si un número es par: % 2 es el resto de dividir entre 2
function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("¿Es 3 par? " + esPar(3));
console.log("¿Es 6666 par? " + esPar(6666));
//Formato moderno
const cuadrado = (numero) => numero * numero;

console.log("Cuadrado de 6: " + cuadrado(6));