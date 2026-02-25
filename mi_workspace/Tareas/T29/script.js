
//Variables
const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");
const reset1 = document.getElementById("reset");
const caja = document.getElementById("caja");
const texto = document.getElementById("texto");
const mensaje = document.getElementById("mensaje");
const titulo = document.getElementById("titulo");
const help1 = document.getElementById("help");

//Funciones
function reset() {
    caja.className = ''; //Con esto de aquí, eliminamos cualquier nombre de clase que tenga asociado el objeto
    caja.classList.add("caja");
    titulo.textContent = "Práctica de Eventos";
    help1.textContent = "";
    texto.value = "";
}

function cajaRoja() {
    caja.className = '';
    caja.classList.add("cajaRoja");
}

function cajaRojaChiquita() {
    caja.className = '';
    caja.classList.add("cajaRojaChiquita");
}

function screamerIn() {
    caja.className = '';
    caja.classList.add("screamer");
}

function screamerOut() {
    caja.className = '';
    caja.classList.add("caja");
}

function escudoAthleticIn() {
    caja.className = '';
    caja.classList.add("athletic");
}

function escudoAthleticOut() {
    caja.className = '';
    caja.classList.add("caja");
}

function displayMessage() {
    mensaje.textContent = "escribiendo...";
}

function hideMessage() {
    mensaje.textContent = "";
}

function maquinaIn() {
    caja.className = '';
    caja.classList.add("maquinaIn");
}

function maquinaOut() {
    caja.className = '';
    caja.classList.add("caja");
}

function cambiarTitulo() {
    titulo.textContent = "¿A qué mola mi página web?"
}

function restaurarTitulo() {
    titulo.textContent = "Práctica de Eventos"
}

function help() {
    // Primera forma de meter saltos de línea 
    //help1.style.whiteSpace = "pre-line";
    //help1.textContent = "Puedes dar click o doble click a Caja Roja\nPuedes dejar pulsado el botón Athletic\nPuedes pasar el ratón por encima de la caja\nPrueba a hacer click dentro y fuera del cuadro de texto\nPuedes escribir en el cuadro de texto\nPuedes resetear todo con el botón de Reset";

    // Segunda forma de meter saltos de línea, bastante más sencilla, pues se escribe con un formato más natural 
    help1.textContent = `
    Puedes dar click o doble click a Caja Roja
    Puedes dejar pulsado el botón Athletic
    Puedes pasar el ratón por encima de la caja
    Prueba a hacer click dentro y fuera del cuadro de texto
    Puedes escribir en el cuadro de texto\nPuedes resetear todo con el botón de Reset`;
}

//Eventos
boton1.addEventListener("click", cajaRoja);
boton1.addEventListener("dblclick", cajaRojaChiquita);
reset1.addEventListener("click", reset);
caja.addEventListener("mouseover", screamerIn);
caja.addEventListener("mouseout", screamerOut);
boton2.addEventListener("mousedown", escudoAthleticIn);
boton2.addEventListener("mouseup", escudoAthleticOut);
texto.addEventListener("input", maquinaIn);
texto.addEventListener("focus", cambiarTitulo);
texto.addEventListener("blur", restaurarTitulo);
texto.addEventListener("keydown", displayMessage);
texto.addEventListener("keyup", hideMessage);
boton3.addEventListener("click", help);