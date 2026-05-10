// Esta es la práctica de utilización de JSON

// Creo un objeto JSON. Acordarse de que no podemos poner comentarios en el objeto JSON, pues JSON no admite comentarios
// Aunque las propiedades (futuras claves del JSON) tienen dobles comillas (como requiere JSON), aún es un objeto JavaScript.
// Será un objeto JSON cuando se serialice (se convierta a texto plano). También podríamos crear el objeto JavaScript sin las
// comillas en las propiedades, y luego al serializarlo, ya se añadirán, además de convertirse a texto plano

let persona = {
    "nombre": "Jesús Gómez Alonso",
    "edad": 27,
    "aficciones": ["leer", "Estudiar LM", "Ir a la playita"],
    "direccion": {
        "calle": "Calle Mayor",
        "numero": 35
    }
}

let amigos = [
    {"nombre": "Ana", "edad": 33},
    {"nombre": "Jonathan", "edad": 35},
    {"nombre": "Dani", "edad": 27}

]

// Visualizamos el objeto persona
console.log(persona);
console.log(JSON.stringify(persona));

// Incorporamos el objeto amigos dentro del objeto persona
persona.amigos = amigos;
// Y lo volvemos a visualizar
console.log(persona);
console.log(JSON.stringify(persona));

// Visualizamos el objeto amigos
console.log(amigos);
console.log(JSON.stringify(amigos));

let txtNombre = document.getElementById("persona");
txtNombre.innerHTML = "<strong>" + persona.nombre + " " + persona.edad + "</strong>";

let listaAmigos = document.getElementById("amigos");
// Bucle para rellenar la variable temporal que crea los elementos de la lista desordenada del DOM
let txtTemporal = "<strong>Amigos</strong>";
for (let i = 0; i < amigos.length; i++) {
    txtTemporal += `<li> ${amigos[i].nombre} </li>`
}

listaAmigos.innerHTML = txtTemporal;
