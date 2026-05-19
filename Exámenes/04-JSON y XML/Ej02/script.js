fetch("clasificacion.xml")
.then(obtenerTexto)
.then(parsearXML)
.then(mostrarDatos);

function obtenerTexto(response) {
    return response.text();
}

function parsearXML(str) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(str, "text/xml");
    return xmlDoc;
}

function mostrarDatos(datos) {
    let listaXML = datos.getElementsByTagName("equipo");
    let listaEquipos = "";
    for (let i = 0; i < listaXML.length; i++) {
        let nombre = listaXML[i].querySelector("nombre").textContent;
        let ciudad = listaXML[i].querySelector("ciudad").textContent;
        let puntos = listaXML[i].querySelector("puntos").textContent;
        listaEquipos += `
        <li>${i + 1}º    ${nombre} - ${ciudad} ${puntos} pts</li>
        `
    }
    document.getElementById("equipos").innerHTML = listaEquipos;
}