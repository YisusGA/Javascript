//Primero, seleccionamos el elemento con el ID "mensaje", usando tanto el método getElementById() como el método querySelector(). Y seleccionamos el elemento con el ID "icono"
const mensaje1 = document.getElementById("mensaje");
const mensaje2 = document.querySelector(".mensaje");
const icono = document.getElementById("icono");

//Seleccionamos el elemento botón con el ID "btn-test" y hacemos que, al hacer click sobre él, ejecute el método print()
const test = document.getElementById("btn-test");
test.addEventListener("click", print);

//Seleccionamos el elemento botón con el ID "btn-ok" y hacemos que, al hacer click sobre él, ejecute el método showCorrecto()
const ok = document.getElementById("btn-ok");
ok.addEventListener("click", showCorrecto);

//Seleccionamos el elemento botón con el ID "btn-error" y hacemos que, al hacer click sobre él, ejecute el método showError()
const error = document.getElementById("btn-error");
error.addEventListener("click", showError);

//Seleccionamos el elemento botón con el ID "btn-reset" y hacemos que, al hacer click sobre él, ejecute el método showReset()
const reset = document.getElementById("btn-reset");
reset.addEventListener("click", showReset);

//Método que nos sirve para comprobar que hemos hecho bien la selección del elemento con el ID mensaje
function print() {
    console.log(mensaje1);
    console.log(mensaje2);
    let equal = false;
    if (mensaje1 === mensaje2) {
        equal = true;
    }
    console.log("¿Son el mismo objeto?", equal);
};

//Método para cambiar el estado a correcto
function showCorrecto() {
    mensaje1.classList.remove("error");
    mensaje1.textContent = "Acceso permitido";
    mensaje1.classList.add("correcto");
    icono.src = "ok.png";
    icono.title = "Estado correcto";
}

//Método para cambiar el estado a error
function showError() {
    mensaje1.classList.remove("correcto");
    mensaje1.textContent = "Error";
    mensaje1.classList.add("error");
    icono.src = "error.png";
    icono.title = "Estado error";
}

//Método para cambiar el estado a espera
function showReset() {
    mensaje1.textContent = "Sistema en espera";
    mensaje1.classList.remove("error", "correcto");
    icono.src = "espera.png";
    icono.title = "En espera";
}