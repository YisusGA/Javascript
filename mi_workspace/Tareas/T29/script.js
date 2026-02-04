const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");
const reset1 = document.getElementById("reset");
const caja = document.getElementById("caja");
const texto = document.getElementById("texto");
const mensaje = document.getElementById("mensaje");
const titulo = document.getElementById("titulo");

function reset() {
    caja.className = ''; //Con esto de aquí, eliminamos cualquier nombre de clase que tenga asociado el objeto
    caja.classList.add("caja");
    mensaje.textContent = "";
    titulo.textContent = "Práctica de Eventos";
}

function cajaRoja() {
    caja.className = '';
    caja.classList.add("cajaRoja");
}

function cajaRojaChiquita() {
    caja.className = '';
    caja.classList.add("cajaRojaChiquita");
}

function cajaMouse() {
    caja.className = '';
    caja.classList.add("screamer");
}

function escudoAthletic() {
    caja.className = '';
    caja.classList.add("athletic");
}

function displayMessage() {
    mensaje.textContent = "escribiendo..."; //No funciona
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
    titulo.textContent = "¿A qué mola mi página web? Pulsa tecla arriba para resetear esto"
}

boton1.addEventListener("click", cajaRoja);
boton1.addEventListener("dblclick", cajaRojaChiquita);
reset1.addEventListener("click", reset);
caja.addEventListener("mouseover", cajaMouse);
caja.addEventListener("mouseout", reset);
boton2.addEventListener("mousedown", escudoAthletic);
boton2.addEventListener("mouseup", reset);
//texto.addEventListener("input", displayMessage);
texto.addEventListener("focus", maquinaIn);
texto.addEventListener("blur", reset);
texto.addEventListener("keydown", displayMessage);
texto.addEventListener("keyup", reset);