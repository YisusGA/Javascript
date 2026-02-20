
// DEFINICIÓN DE VARIABLES


// Formulario
const formRegistro = document.getElementById("formPaciente");
// Podemos pasar de crear variables globales que pillen cada campo del formulario y directamente pillar los valores
// de esos campos como se ve en la función validarDatosFormulario(event) que está debajo

// FUNCIONES 

// Validamos los datos del formulario introducidos mediante un alert que muestra lo que se ha introducido
function validarDatosFormulario(event) {
    event.preventDefault();

    let mensaje = `
    -Nombre: ${formRegistro.nombre.value}
    -Apellidos: ${formRegistro.apellidos.value}
    -DNI/Pasaporte: ${formRegistro.dni.value}
    -Teléfono: ${formRegistro.telefono.value}
    -Edad: ${formRegistro.edad.value}
    -Grupo sanguineo: ${formRegistro.grupoSanguineo.value}
    -Prioridad de atención: ${formRegistro.prioridad.value}
    -Acepta consentimiento informado: ${formRegistro.consentimiento.checked ? "SÍ" : "NO"}
    `
    alert(mensaje);
}

// GESTIÓN DE EVENTOS

// Al pulsar el botón submit de formulario, se ejecuta la función que muestra el alert (delegación de eventos)
formRegistro.addEventListener("submit", validarDatosFormulario);

