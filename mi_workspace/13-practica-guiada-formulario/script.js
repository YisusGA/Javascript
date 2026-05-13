// Obtenemos el formulario
let form = document.getElementById("formularioPaquete");

// Añadimos el evento submit al formulario
form.addEventListener("submit", enviarFormulario);

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
// Convierte la respuesta en objeto JavaScript
// -----------------------------
function obtenerRespuestaJSON(response) {
    return response.json(); // Esto está parseando la respuesta, de JSON a Objeto JavaScript. 
                           // En este caso, debe parsearse así y no con JSON.parse(response), 
                           // porque .json() es un método asíncrono de un objeto Response que 
                           // espera a recibir el flujo de datos completo y luego lo parsea usando 
                           // JSON.parse(). JSON.parse() en cambio es un método síncrono
                           // del objeto JSON, y debería usarse sólo para parsear unos datos que
                           // estemos seguros que ya tenemos (como los almacenados dentro de una
                           // variable). Cuidado: no podemos usar el método .json() para parsear otra
                           // cosa que no sea un objeto Response, pues el método .json() pertenece 
                           // al objeto Response.
}

// -----------------------------
// Muestra la respuesta del servidor
// -----------------------------
// El argumento datos lo podría llamar como quisiera,
// porque realmente es lo que le pasa el then anterior
// de la cadena
function mostrarRespuesta(datos) {
    console.log("Respuesta del servidor:");
    console.log(datos); // Mostramos por consola el objeto JavaScript que parseamos antes
    alert("Datos enviados correctamente");
}
