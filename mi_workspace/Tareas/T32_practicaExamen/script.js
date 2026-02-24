
// DEFINCIÓN DE VARIABLES

const formRegistro = document.getElementById("formPaciente");

// DEFINCIÓN DE FUNCIONES

function mostrarDatos(event) {
    event.preventDefault();

    const mensaje = `
        Nombre: ${formRegistro.nombre.value}
        Apellidos: ${formRegistro.apellidos.value}
        DNI / Pasaporte: ${formRegistro.dni.value}
        Telefono: ${formRegistro.telefono.value}
        Edad: ${formRegistro.edad.value}
        Grupo sanguíneo: ${formRegistro.grupoSanguineo.value}
        Prioridad de atención: ${formRegistro.prioridad.value}
        Acepta consentimiento : ${formRegistro.consentimiento.checked ? "ACEPTA" : "NO ACEPTA"}
    `;

    alert(mensaje);
}

// GESTIÓN DE EVENTOS

formRegistro.addEventListener("submit", mostrarDatos);