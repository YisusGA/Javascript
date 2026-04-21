// Llamada inicial para cargar el JSON
fetch("datos.json")
.then(obtenerTexto) // Paso 1: convertir a texto
.then(parsearJSON) // Paso 2: convertir a objeto JavaScript
.then(mostrarPacientes); // Paso 3: mostrar en pantalla

// Convierte la respuesta en texto
function obtenerTexto(response) {
    // Devolvemos el contenido como texto
    return response.text();
}
// Convierte el texto en JSON
function parsearJSON(str) {
    // Convertimos el texto en un array de objetos JavaScript
    let datos =JSON.parse(str);
    // Devolvemos el JSON ya parseado
    return datos
}

// Muestra los pacientes en la web
function mostrarPacientes(datos) {
    // Insertamos el título en el HTML
    document.getElementById("titulo").textContent="Análisis clínicos";
    // Variable donde construiremos el HTML
    let lista = "";
    // Recorremos todos los pacientes
    for(let i = 0; i < datos.length; i++) {
        // Extraemos datos del paciente
        let id = datos[i].id;
        let nombre = datos[i].nombre;
        let edad = datos[i].edad;
        let telefono = datos[i].telefono;
        let prueba = datos[i].prueba;
        let resultado = datos[i].resultado;
        let unidad = datos[i].unidad;

        // Construimos el HTML del paciente
        lista =lista +`
        <li>
            <strong>${nombre}</strong><br>
            ID: ${id}<br>
            Edad: ${edad}<br>
            Teléfono: ${telefono}<br>
            Prueba: ${prueba}<br>
            Resultado: ${resultado}<br>
            Unidad: ${unidad}<br>
        </li>
        <hr>
        `;
    }
    document.getElementById("pacientes").innerHTML = lista;
}