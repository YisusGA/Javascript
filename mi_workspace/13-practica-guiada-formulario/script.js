// Obtenemos el formulario
let document = document.getElementById("formularioPaquete");

// Añadimos el evento submit al formulario
document.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();
    // Recogemos los valores escritos en el formulario
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

    // Enviamos el JSON al servidor. Este es un servidor que nos
    // proporciona JSON para pruebas. Aquí podría ir la dirección 
    // del servidor que yo quisiiera
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: paqueteJSON
    })
    .then(obtenerRespuestaJSON)
    .then(mostrarRespuesta);
}

// -----------------------------
// Convierte la respuesta en JSON
// -----------------------------
function obtenerRespuestaJSON(response) {
    return response.json();
}

// -----------------------------
// Muestra la respuesta del servidor
// -----------------------------
// El argumento datos lo podría llamar como quisiera,
// porque realmente es lo que le pasa el then anterior
// de la cadena
function mostrarRespuesta(datos) {
    console.log("Respuesta del servidor:");
    console.log(datos);
    document.getElementById("salidaJSON").textContent = datos.stringify;
    alert("Datos enviados correctamente");
}
