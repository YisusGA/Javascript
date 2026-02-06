
// VARIABLES

// Formulario completo
const formulario = document.getElementById("formulario");
// Inputs
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
// Mensaje informativo
const mensaje = document.getElementById("mensaje");

/*     Jesús Gómez Alonso         */
/* ------------------------------ */
/* Gestión de eventos y funciones */
/* ------------------------------ */

//FUNCIONES

// Función para evento focus
function campoActivo() {
    nombre.classList.add("campo-activo");
}

// Función para evento blur
function campoInactivo() {
    nombre.classList.remove("campo-activo");
}

//Función para evento mouseover
function overForm() {
    mensaje.textContent = "Estás sobre el Formulario";
}

//Función para evento mouseout
function outForm() {
    mensaje.textContent = "Raton sale del formulario";
}

//Función para evento Submit
//Al haber guardado el formulario en una variable, ya podemos usar los elementos que hay dentro del formulario (como el botón de submit) sin necesidad de asignarle un ID al botón de Submit y crear una variable para que lo seleccione
function validarFormulario(event) { 
    event.preventDefault();
    if (nombre.value === "" || email.value === "") {
        mensaje.textContent = "Todos los campos son obligatorios.";
        mensaje.className = "error";
    } else {
        mensaje.textContent = "Formulario enviado correctamente.";
        mensaje.className = "correcto";
    }
}

//EVENTOS

// Evento focus
nombre.addEventListener("focus", campoActivo);
email.addEventListener("focus", campoActivo);

// Evento blur
nombre.addEventListener("blur", campoInactivo);
email.addEventListener("blur", campoInactivo);

// Evento Ratón pasa por encima del formulario
formulario.addEventListener("mouseover", overForm);
// Cuando el raton sale fuera del formnulario
formulario.addEventListener("mouseout", outForm);

// Evento submit
formulario.addEventListener("submit", validarFormulario);