let formFiesta = document.getElementById("formularioFiesta");
formFiesta.addEventListener("submit", enviarFormulario);
let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", mostrarInvitados);

function enviarFormulario(event) {
    event.preventDefault();

    let txtNombre = document.getElementById("nombre").value;
    let txtApellidos = document.getElementById("apellidos").value;
    let txtCurso = document.getElementById("curso").value;
    let txtTelefono = document.getElementById("telefono").value;
    let txtCorreo = document.getElementById("correo").value;
    let txtAcompanantes = document.getElementById("acompanantes").value;
    let txtMenu = document.getElementById("menu").value;
    let txtComentarios = document.getElementById("comentarios").value;

    let fiesta = {
        nombre: txtNombre,
        apellidos: txtApellidos,
        curso: txtCurso,
        telefono: txtTelefono,
        correo: txtCorreo,
        acompanantes: txtAcompanantes,
        menu: txtMenu,
        comentarios: txtComentarios
    }

    let fiestaJSON = JSON.stringify(fiesta);
    document.getElementById("salidaJSON").innerHTML = fiestaJSON;

    // Enviamos el JSON al servidor
    fetch("recibir_alumno.php", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: fiestaJSON
    })
    .then(obtenerRespuestaJSON)
    .then(mostrarRespuesta);
}

function obtenerRespuestaJSON(datos) {
    return datos.json();
}

function mostrarRespuesta(response) {
   alert("Formulario enviado");
   console.log(response); 
} 

function mostrarInvitados() {
    fetch("datos.json")
    .then(obtenerInvitados)
    .then(addInvitados);
}

function obtenerInvitados(response) {
    return response.json();
}

function addInvitados(datos) {
    let invitadosTxt = "";
    for (let i = 0; i < datos.length; i++) {
        let nombre = datos[i].nombre;
        let apellidos = datos[i].apellidos;
        let curso = datos[i].curso;
        let telefono = datos[i].telefono;
        let correo = datos[i].correo;
        let acompanantes = datos[i].acompanantes;
        let menu = datos[i].menu;
        let comentarios = datos[i].comentarios;
        invitadosTxt += `
        <li>
        Nombre: ${nombre}<br>
        Apellidos: ${apellidos}<br>
        Curso: ${curso}<br>
        Teléfono: ${telefono}<br>
        Correo: ${correo}<br>
        Acompañantes: ${acompanantes}<br>
        Menú: ${menu}<br>
        Comentarios: ${comentarios}<br>
        </li>
        `
    }
    document.getElementById("listaInvitados").innerHTML = invitadosTxt;
}

