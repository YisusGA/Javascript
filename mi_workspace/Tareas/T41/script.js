// Obtenemos los datos desde el fichero xml
fetch("pacientes.xml") // Importante las comillas aquí!!
.then(obtenerDatos)
.then(parsearDatos)
.then(mostrarDatos);

function obtenerDatos(response) {
    return response.text();
}

function parsearDatos(str) {
    let parser = new DOMParser();
    let xmlData = parser.parseFromString(str, "text/html");
    return xmlData;
}

function mostrarDatos(xmlData) {
    document.getElementById("titulo").textContent = "Hospital Central";
    document.getElementById("ciudad").textContent = "Ciudad: " + xmlData.querySelector("ciudad").textContent;
    let pacientes = xmlData.getElementsByTagName("paciente");
    let lista = "";
    for (let i = 0; i < pacientes.length; i++) {
        let nombre = pacientes[i].querySelector("nombre").textContent;
        let edad = pacientes[i].querySelector("edad").textContent;
        let diagnostico = pacientes[i].querySelector("diagnostico").textContent;
        lista += `
        <li>
        <strong>${nombre}</strong> - ${edad} años - ${diagnostico}
        </li>
        `;
    }
    document.getElementById("pacientes").innerHTML = lista;
}