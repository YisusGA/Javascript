
// DEFINICIÓN DE VARIABLES


// Formulario
const formRegistro = document.getElementById("formPaciente");

// Campos de texto
const txtNombre = document.getElementById("nombre");
const txtApellidos = document.getElementById("apellidos");
const txtDni = document.getElementById("dni");

// Campo de teléfono
const telTelefono = document.getElementById("telefono");

// Campo de edad
const numEdad = document.getElementById("edad");

// Selects
const selectGrupo = document.getElementById("grupoSanguineo");
const selectPrioridad = document.getElementById("prioridad");

// Checkbox
const checkConsentimiento = document.getElementById("consentimiento");


// FUNCIONES 

// Validamos los datos del formulario introducidos mediante un alert que muestra lo que se ha introducido
function validarDatosFormulario(event) {
    event.preventDefault();

    let mensaje = `
    -Nombre: ${txtNombre.nombre.value}
    -Apellidos: ${txtApellidos.value}
    -DNI/Pasaporte: ${txtDni.value}
    -Teléfono: ${telTelefono.value}
    -Edad: ${numEdad.value}
    -Grupo sanguineo: ${selectGrupo.value}
    -Prioridad de atención: ${selectPrioridad.value}
    -Acepta consentimiento informado: ${checkConsentimiento.checked ? "SÍ" : "NO"}
    `
    alert(mensaje);
}

// GESTIÓN DE EVENTOS

// Al pulsar el botón submit de formulario, se ejecuta la función que muestra el alert (delegación de eventos)
formRegistro.addEventListener("submit", validarDatosFormulario);

