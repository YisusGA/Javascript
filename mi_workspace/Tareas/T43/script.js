// Obtenemos el formulario
let formulario = document.getElementById("formularioCoche");

// Funciones

function enviarFormulario(event) {
    event.preventDefault();

    // Conseguimos los elementos del formulario
    let txtMarca = document.getElementById("marca").value;
    let txtModelo = document.getElementById("modelo").value;
    let txtAnio = document.getElementById("anio").value;
    let txtKilometros = document.getElementById("kilometros").value;
    let txtCombustible = document.getElementById("combustible").value;
    let txtPrecio = document.getElementById("precio").value;
    let txtVendedor = document.getElementById("vendedor").value;
    let txtTelefono = document.getElementById("telefono").value;

    // Creamos un objeto JavaScript con esos datos
    let coche = {
        marca: txtMarca,
        modelo: txtModelo,
        anio: txtAnio,
        kilometros: txtKilometros,
        combustible: txtCombustible,
        precio: txtPrecio,
        vendedor: txtVendedor,
        telefono: txtTelefono
    }

    // Convertimos el objeto JavaScript a JSON
    let cocheJSON = JSON.stringify(coche, null, 2);
    // Mostramos los datos JSON que vamos a mandar al servidor
    document.getElementById("salidaJSON").textContent = cocheJSON;

    // Enviamos el JSON al servidor
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: cocheJSON
    })
    .then(obtenerRespuestaJSON)
    .then(mostrarRespuesta);
}

// Función para obtener una respuesta del servidor y convertirla a JSON
function obtenerRespuestaJSON(respuesta) {
    return respuesta.json();
}

// Función para mostrar la respuesta del servidor
function mostrarRespuesta(datos) {
    console.log("Respuesta del servidor:");
    console.log(datos);
    alert("Datos enviados correctamente");
}

// Capturar el evento submit del formulario para ejecutar la función enviarFormulario()
formulario.addEventListener("submit", enviarFormulario);