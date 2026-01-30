//Evento click - Saludo
const btnSaludar = document.getElementById("btnSaludar");

function saludar() {
    alert("¡Hola! Esto es un evento click");
}

btnSaludar.addEventListener("click", saludar);

//Evento click - Cambiar color
const btnColor = document.getElementById("btnColor");
function cambiarColor() {
    if (document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
}
btnColor.addEventListener("click", cambiarColor);

// Contador de clics
const btnContador = document.getElementById("btnContador");
const textoContador = document.getElementById("contador");
let clicks = 0;
function contarClicks() {
    clicks++;
    textoContador.textContent = "Clics: " + clicks;
}
btnContador.addEventListener("click", contarClicks);

// Evento mouseover/ mouseout
const mensaje = document.getElementById("mensaje");
function mouseEncima() {
    mensaje.textContent = "¡Ey! Estás encima ";
}
function mouseFuera() {
    mensaje.textContent = "Pasa el ratón por aquí";
}
mensaje.addEventListener("mouseover", mouseEncima);
mensaje.addEventListener("mouseout", mouseFuera);

// Evento input
const nombre = document.getElementById("nombre");
const salida = document.getElementById("salida");
function escribirNombre() {
    salida.textContent = "Hola, " + nombre.value;
}
nombre.addEventListener("input", escribirNombre);