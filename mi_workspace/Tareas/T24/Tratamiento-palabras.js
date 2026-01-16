//Tarea 24 Ejercicio 2
console.log("Tarea 24 Ejercicio 2. Jesús Gómez Alonso. 1º DAM");
console.log();

//Array con las palabras
const palabras = [ //Es necesario que sea let para poder cambiar su contenido más adelante
    "  casa",
    "Perro",
    "gato",
    "ELEFANTE",
    "sol",
    "Mariposa",
    "pez"
];

//Recorrer el array mostrando las palabras originales
console.log("Recorremos el array de palabras");
console.log(palabras);
palabras.forEach((palabra) => {
    console.log("Palabra: ", palabra);
});
console.log();

//Eliminamos los espacios en blanco al principio y al final de cada palabra del array
console.log("Eliminamos los espacios en blanco al principio y al final de cada palabra");
//Se podría reasignar el array original como se de debajo, aunque no es recomendable, pues algunos métodos
//no funcionan, puede generar conflictos dependiendo del contexto y no nos permitiría comparar el antes y el después
//palabras = palabras.map(palabra => palabra.trim());
const palabrasLimpias = palabras.map(palabra => palabra.trim()); //Mejor crear nueva variable
console.log(palabrasLimpias); //Mostramos el contenido del nuevo array
console.log();

//Pasamos las palabras a minúsculas
console.log("Pasamos las palabras a minúsculas");
const palabrasMinusculas = palabrasLimpias.map(palabra => palabra.toLowerCase());
console.log(palabrasMinusculas);
console.log();

//Ordenamos alfabéticamente el array
console.log("Ordenamos alfabéticamente el array");
//Si tuviera mayúsculas y minúsculas al inicio de cada palabra, esto así no me serviría, 
//porque las mayúsculas van antes que las minúsculas.
//const palabrasOrdenadas = palabrasMinusculas.sort(); 
//Para un orden alfabético real, tengo que hacer esto de debajo
const palabrasOrdenadas = palabrasMinusculas.sort((a, b) => a.localeCompare(b));
console.log(palabrasOrdenadas);
console.log();

//Creamos un nuevo array que contenga las palabras que tengan más de 4 letras
console.log("Creamos un nuevo array que contenga las palabras que tengan más de 4 letras");
const palabrasLargas = palabrasOrdenadas.filter(palabra => palabra.length > 4);
console.log(palabrasLargas);
console.log();

//Comprobamos si existe la palabra "gato"
console.log("Comprobamos si existe la palabra gato");
console.log("¿Existe la palabra gato? ", palabras.some(palabra => palabra === "gato"));
console.log();

//Generamos un array con la longitud de cada palabra
console.log("Generamos un array con la longitud de cada palabra");
const longitudes = palabrasLimpias.map(palabra => palabra.length);
console.log(longitudes);
console.log();

