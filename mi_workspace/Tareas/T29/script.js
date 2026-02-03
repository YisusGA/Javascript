const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");
const caja = document.getElementById("caja");

function cuadroRojo() {
    caja.classList.remove("caja");
    caja.classList.add("cajaRoja");
}

boton1.addEventListener("click", cuadroRojo);