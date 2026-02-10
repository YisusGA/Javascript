
//Definición de variables
const formPractica = document.getElementById("formulario");

const txtNombre = document.getElementById("nombre");
const txtApellidos = document.getElementById("apellidos");
const txtEmail = document.getElementById("email");

const selectCurso = document.getElementById("curso");
const selectTurno = document.getElementById("turno");

const checkAcepto = document.getElementById("acepto");

const btnComprueba = document.getElementById("comprueba");


//Gestión de eventos - Definición de funciones

function compruebaAceptacionNormas() {
    //Esta función comprueba si el checkbox de normas está o no marcado
    let mensaje = "";
    if (checkAcepto.checked === true) {
        mensaje = "Normas aceptadas";
    } else {
        mensaje = "Normas no aceptadas";
    }
    alert(mensaje);
}

btnComprueba.addEventListener("click", compruebaAceptacionNormas);