fetch("paquetes.json")
.then(obtenerTexto)
.then(parsearJSON)
.then(mostrarDatos);

function obtenerTexto(response) {
    return response.text();
}

function parsearJSON(str) {
    let datos = JSON.parse(str);
    return datos;
}

function mostrarDatos(datos) {
    let lista = "";
    for(let i = 0; i < datos.length; i++) {
        let id = datos[i].id;
        let remitente = datos[i].remitente;
        let destinatario = datos[i].destinatario;
        let calle = datos[i].direccion.calle;
        let numero = datos[i].direccion.numero;
        let ciudad = datos[i].direccion.ciudad;
        let telefono = datos[i].telefono;
        let peso = datos[i].peso;
        let unidad = datos[i].unidad;
        let estado = datos[i].estado;

        lista += `
        <li>
            <strong>Paquete ${id}</strong><br>
            Remitente: ${remitente}<br>
            Destinatario: ${destinatario}<br>
            Dirección: Calle ${calle} ${numero}, ${ciudad}<br>
            Teléfono: ${telefono}<br>
            Peso: ${peso} ${unidad}<br>
            Estado: ${estado}<br>
        </li>
        <hr>
        `
    }

    document.getElementById("listaPaquetes").innerHTML = lista;
}