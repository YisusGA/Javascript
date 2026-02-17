
// DEFINICIÓN DE VARIABLES

const formAlta = document.getElementById("formGym");

// DEFINICIÓN DE FUNCIONES

function mostrarAlerta(event) {
    event.preventDefault();

    // Definimos la variable que almacena un boolean con el estado 
    // del elemento checkbox de aceptación de normas (checked (true) / unchecked (false))
    const aceptaNormas = document.getElementById("acepta").checked;

    // Inicializamos el mensaje a mostrar en la alerta con el valor por defecto que se mostrará
    // si no se han aceptado las normas
    let mensaje = "No se han aceptado las normas";

    // Y si se han aceptado, entonces se modifica el contenido del mensaje para incluir los datos
    //  introducidos por el usuario
    if (aceptaNormas) {
        mensaje =`
        -Nombre: ${document.getElementById("nombre").value}
        -Peso: ${document.getElementById("peso").value} Kg
        -Altura: ${document.getElementById("altura").value} cm
        -Objetivo: ${document.getElementById("objetivo").value}
        -Plan: ${document.getElementById("plan").value}
        -Acepta normas: ${aceptaNormas ? "SÍ" : "NO"}
        `
    }

    // Mostramos una alerta con el contenido del mensaje, sea cual sea
    alert(mensaje);
}

// GESTIÓN DE EVENTOS
formAlta.addEventListener("submit", mostrarAlerta);