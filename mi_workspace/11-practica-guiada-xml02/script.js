// -----------------------------
// Convierte la respuesta en texto
// -----------------------------
function obtenerTexto(response) {
    // Devolvemos el contenido como texto
    return response.text(); // Tened FE
}

function parsearXML(str) {
    // Creamos un parser de XML
    let parser = new DOMParser();
    // Convertimos el texto en un documento XML
    let xmlDoc = parser.parseFromString(str, "text/xml");
    // Devolvemos el XML ya parseado
    return xmlDoc;
}

function mostrarLibros(xmlDoc) {
    // Insertamos el título en el HTML
    document.getElementById("titulo").textContent="Biblioteca";
    // getElementsByTagNamedevuelve una colección con todos los elementos que tienen ese nombre dentro del
    // documento xmlDoc
    let libros= xmlDoc.getElementsByTagName("libro");
    // Variable donde construiremos el HTML
    let lista ="";
    // Recorremos todos los libros
    for(let i=0; i <libros.length; i++) {
        // Extraemos datos del libro
        let titulo= libros[i].querySelector("titulo").textContent; //añadir resto de campos
        // Construimos el HTML del libro
        lista+=`
            <li>
                <strong>${titulo}</strong><br>
                Autor: ${autor}<br>
                Editorial: ${editorial}<br>
            </li>
            <hr>
        `;
    }
    // Insertamos el resultado en la página
    document.getElementById("libros").innerHTML=lista;
}

fetch("libros.xml")
.then(obtenerTexto)
.then(parsearXML)
.then(mostrarLibros);