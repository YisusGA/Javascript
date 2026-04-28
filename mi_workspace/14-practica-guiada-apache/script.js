// Obtenemos el formulario
let formPaquete = document.getElementById("formularioPaquete");

// Función para recoger y enviar los datos
function enviarFormulario(event) {
    event.preventDefault();

    // Recogemos los datos
    let txtRemitente=document.getElementById("remitente").value
    let txtDestinatario=document.getElementById("destinatario").value
    let txtDireccion=document.getElementById("direccion").value
    let txtTelefono=document.getElementById("telefono").value
    let numPeso=document.getElementById("peso").value
    let txtEstado=document.getElementById("estado").value
    
    // Creamos un objeto JavaScript con esos datos
    let paquete = {
        remitente: txtRemitente,
        destinatario: txtDestinatario,
        direccion: txtDireccion,
        telefono: txtTelefono,
        peso: numPeso,
        estado: txtEstado
    }

    // Convertimos el objeto JavaScript a formato JSON
    let paqueteJSON=JSON.stringify(paquete, null, 2);
    // Mostramos el JSON generado en pantalla
    document.getElementById("salidaJSON").textContent = paqueteJSON;

    // Enviamos el JSON al servidor
    fetch("recibir_paquete.php", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: paqueteJSON
    })
    .then(obtenerRespuestaJSON)
    .then(mostrarRespuesta);
}

// Obtenemos la respuesta del servidor
function obtenerRespuestaJSON(response) {
    return response;
}

function mostrarRespuesta(datos) {
    console.log("Respuesta del servidor:");
    console.log(datos);
    alert("Datos enviados correctamente");
}

// Añadir el evento
formPaquete.addEventListener("submit", enviarFormulario);