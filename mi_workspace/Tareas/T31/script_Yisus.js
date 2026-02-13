
//VARIABLES

//Formulario
const form = document.getElementById("formulario");

//Campos de nombre y correo
const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");

//Checkbox de condiciones
const condiciones = document.getElementById("condiciones");

//Lista de botones radio

const tipoUsuario = document.getElementsByName("tipo"); // getElementsByName() devuelve una NodeList (LinkedList) de 
                                                       // todos los elementos de un HTML que tienen el mismo valor para
                                                       // el atributo nombre. Luego podemos iterar sobre esa NodeList. Es más sencilla la solución de Miguel Ángel, mirarla. Pero su versión no tiene validación de entrada 
const checkboxProfesor = document.getElementById("profesor");
const checkboxAlumno = document.getElementById("alumno");

//Mensaje a mostrar
const mensaje = document.getElementById("resultado");

//Botón de reset
const reset = document.getElementById("reset");

//FUNCIONES

//Función de campo activo para el campo nombre
function campoActivoNombre() {
    nombre.classList.add("campoActivo");
}

//Función de campo inactivo para el campo nombre
function campoInactivoNombre() {
    nombre.className = "";
}

//Función de campo activo para el campo email
function campoActivoEmail() {
    correo.classList.add("campoActivo");
}

//Función de campo inactivo para el campo nombre
function campoInactivoEmail() {
    correo.className = "";
}

//Función para resetear el contenido del mensaje y su clase asociada
function resetStyle () {
    mensaje.textContent = "";
    mensaje.className = "";
}

//Función para validar que el formulario se ha rellenado correctamente
function validarFormulario(event) {
    event.preventDefault();
    if (nombre.value === "" || email.value === "" || !condiciones.checked || (!checkboxAlumno.checked && !checkboxProfesor.checked)) {
        mensaje.textContent = "Todos los campos son obligatorios";
        mensaje.classList.add("error");
    } else {
        let radioSelected = ""; //Variable de tipo String para almacenar el valor del radio button que se ha seleccionado. Importante que sea let, porque tenemos que reasignar la variable dentro del if
        for (let i = 0; i < tipoUsuario.length; i++) { //Aquí iteramos sobre la NodeList que creamos a partir de los elementos radio del HTML
            if (tipoUsuario[i].checked) {
                radioSelected = tipoUsuario[i].value; //Y si se cumple que algún elemento de la NodeList está seleccionado (checked), asignamos su valor a la variable radioSelected
            }
        }
        mensaje.classList.add("correcto");
        //Esta es una forma de modificar el texto de un elemento pero usando formato, con innerHTML, usando `` y las variables contenidas con ${}. Se pueden usar etiquetas de HTML
        mensaje.innerHTML = `
        <p><strong>Datos introducidos correctamente</strong></p>
        <p><strong>Nombre:</strong> ${nombre.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Acepta condiciones:</strong> Sí</p>
        <p><strong>Tipo de usuario:</strong> ${radioSelected}</p>
        `;
    }
}

//EVENTOS

//Campo activo para nombre y email
nombre.addEventListener("focus", campoActivoNombre);
correo.addEventListener("focus", campoActivoEmail);

//Campo inactivo para nombre y email
nombre.addEventListener("blur", campoInactivoNombre);
correo.addEventListener("blur", campoInactivoEmail);

//Reset
reset.addEventListener("click", resetStyle);

//Validar formulario
form.addEventListener("submit", validarFormulario);