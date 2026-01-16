//Array con las notas
const notas = [4, 7, 9, 3, 6, 10, 5, 8];

//Recorrer el array mostrando cada nota y su posición en el array
console.log("Recorremos el array de notas");
notas.forEach((notas, i) => {
    console.log("Posicion: ", i + 1, "Nota: ", notas)
});

//Calculamos y mostramos la media de las notas
console.log("Calculamos la media de las notas");
const media = notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0) / notas.length;
console.log(media);

//Obtenemos un array con los aprobados
const aprobados = notas.filter(i => i >= 5);
console.log("Notas aprobadas: ", aprobados);

//Contamos el número de suspensos
const suspensos = notas.filter(i => i < 5);
console.log("Número de suspensos: ", suspensos.length);

//Miramos si todos han aprobado
console.log("¿Han aprobado todos? Respuesta: ", notas.every(i => i >= 5));

//Creamos un nuevo array con las notas aumentadas en +1 (máximo 10)
const nuevasNotas = notas.map(i => i < 10 ? i + 1 : i);
console.log("Nuevas notas: ", nuevasNotas);