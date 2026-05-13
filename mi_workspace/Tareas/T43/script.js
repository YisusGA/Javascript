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
    return respuesta.json(); // Esto está parseando la respuesta, de JSON a Objeto JavaScript. 
                           // En este caso, debe parsearse así y no con JSON.parse(response), 
                           // porque .json() es un método asíncrono de un objeto Response que 
                           // espera a recibir el flujo de datos completo y luego lo parsea usando 
                           // JSON.parse(). JSON.parse() en cambio es un método síncrono
                           // del objeto JSON, y debería usarse sólo para parsear unos datos que
                           // estemos seguros que ya tenemos (como los almacenados dentro de una
                           // variable). Cuidado: no podemos usar el método .json() para parsear otra
                           // cosa que no sea un objeto Response, pues el método .json() pertenece 
                           // al objeto Response.
     
// Lo que se recibe como respuesta del servidor es un objeto Response,
// que contiene metadatos: si la conexión fue exitosa (status 200 o 201),
// las cabeceras, etc. Este servidor funciona como un espejo, que nos devuelve
// el texto que nosotros mandamos, pero añadiendo más cosas.
// Y convertimos a objeto JavaScript esa respuesta en formato JSON que
// nos mandó el servidor, usando el método .json() sobre esa respuesta
}

// Función para mostrar la respuesta recibida del servidor, y que hemos convertido en objeto JavaScript
function mostrarRespuesta(datos) {
    console.log("Respuesta del servidor:");
    console.log(datos);
    // Mostramos en pantalla los elementos que nos interesan de la respuesta que nos dio el servidor y que convertimos a objeto JS
    document.getElementById("salidaJSON").textContent = `
        Marca: ${datos.marca}
        Modelo: ${datos.modelo}
        Año: ${datos.anio}
        Kilómetros: ${datos.kilometros}
        Combustible: ${datos.combustible}
        Precio: ${datos.precio}
        Vendedor: ${datos.vendedor}
        Telefono: ${datos.telefono}
        ID añadido por el servidor: ${datos.id}
    `;
}

// Capturar el evento submit del formulario para ejecutar la función enviarFormulario()
formulario.addEventListener("submit", enviarFormulario);