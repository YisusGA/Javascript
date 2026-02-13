
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

// Funciones para evento focus
function campoActivoNombre() {
    nombre.classList.add("campo-activo");
}

function campoActivoEmail() {
    email.classList.add("campo-activo");
}

// Funciones para evento blur
function campoInactivoNombre() {
    nombre.classList.remove("campo-activo");
    if(nombre.value === "") {
        mensaje.textContent = "El campo de nombre está vacío";
        mensaje.className = "error"; //Esta es la forma de asignar una clase cuando no tiene atributo clase
    }
}

function campoInactivoEmail() {
    email.classList.remove("campo-activo");
    if(email.value === "") {
        mensaje.textContent = "El campo de email está vacío";
        mensaje.className = "error";
    }
}

//Función para evento mouseover
function overForm() {
    mensaje.textContent = "Estás sobre el Formulario";
}

//Función para evento mouseout
function outForm() {
    mensaje.textContent = "Raton sale del formulario";
    mensaje.className = "";
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
nombre.addEventListener("focus", campoActivoNombre);
email.addEventListener("focus", campoActivoEmail);

// Evento blur
nombre.addEventListener("blur", campoInactivoNombre);
email.addEventListener("blur", campoInactivoEmail);

// Evento Ratón pasa por encima del formulario
formulario.addEventListener("mouseover", overForm);
// Cuando el raton sale fuera del formnulario
formulario.addEventListener("mouseout", outForm);

// Evento submit
//No hace falta una varible para el botón Submit, pues hemos almacenado el formulario completo en una variable, y eso hace posible usar la delegación de eventos, pudiendo así usar como evento submit, que viene del botón submit de formulario
formulario.addEventListener("submit", validarFormulario);