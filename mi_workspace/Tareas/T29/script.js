const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");
const reset1 = document.getElementById("reset");
const caja = document.getElementById("caja");

function reset() {
    caja.className = ''; //Con esto de aquí, eliminamos cualquier nombre de clase que tenga asociado el objeto
    caja.classList.add("caja");
}

function cajaRoja() {
    caja.classList.remove("caja");
    caja.classList.add("cajaRoja");
}

function cajaRojaChiquita() {
    caja.classList.remove("caja");
    caja.classList.add("cajaRojaChiquita");
}

boton1.addEventListener("click", cajaRoja);
boton1.addEventListener("dblclick", cajaRojaChiquita);
reset1.addEventListener("click", reset);