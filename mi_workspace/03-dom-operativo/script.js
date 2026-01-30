// PASO 1: Selección de elementos
const mensaje = document.getElementById("mensaje");
const icono = document.querySelector("#icono");
const btnTexto = document.getElementById("btn-texto");
const btnAtributo = document.getElementById("btn-atributo");
const btnClase = document.getElementById("btn-clase");

//Probamos a imprimir las variables en las que hemos almacenado nodos de tipo elemento del DOM
console.log(mensaje);
console.log(icono);

//PASO 2: Modifica contenido con textContent
mensaje.textContent = "Texto modificado desde JavaScript";

// Paso3: Modificar atributos
icono.title = "Estado correcto";

//Paso 4: Manipular clases CSS
mensaje.textContent = "Estado correcto";
mensaje.classList.remove("error");
mensaje.classList.add("correcto");
