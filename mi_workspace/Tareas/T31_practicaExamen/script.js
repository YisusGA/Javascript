
// DEFINCIÓN DE VARIABLES

const formRegistro = document.getElementById("formulario"); // Almacenamos el formulario y sus hijos en una variable
const txtResultado = document.getElementById("resultado"); // Almacenamos el div para mostrar el resultado en una variable

// DEFINICIÓN DE FUNCIONES

function mostrarDatos(event) { // Función para mostrar los datos introducidos dentro del elemento txtResultado
    event.preventDefault(); // Importante para evitar el comportamiento por defecto de un formulario

    const tipoSeleccionado = document.querySelector('input[name="tipo"]:checked'); // Almacenamos el elemento radio del formulario como una variable que almacena el valor de lo que esté seleccionado

    // Inyectamos HTML dentro del elemento div con los valores introducidos
    txtResultado.innerHTML = `
    <p><strong>Nombre:</strong> ${formRegistro.nombre.value}</p>
    <p><strong>Email:</strong> ${formRegistro.email.value}</p>
    <p><strong>Acepta condiciones:</strong> ${formRegistro.condiciones.checked ? "SI" : "NO"}</p>
    <p><strong>Tipo de usuario:</strong> ${tipoSeleccionado ? tipoSeleccionado.value : "No seleccionado"}</p>
    `
    txtResultado.className = ""; // Eliminamos cualquier clase que hubiera asociada al div de resultado
    if (formRegistro.condiciones.checked) {
        txtResultado.classList.add("correcto"); // Si las condiciones se aceptaron, el mensaje se muestra en color verde, asignando la clase .correcto del CSS
    } else {
        txtResultado.classList.add("error"); // Si las condiciones no se aceptaron, el mensaje se muestra en color rojo, asignando la clase .error del CSS
    }
    
};

// GESTIÓN DE EVENTOS

formRegistro.addEventListener("submit", mostrarDatos); // Al hacer click en el botón de submit, se ejecuta la función mostrarDatos