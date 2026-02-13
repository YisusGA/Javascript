
//Definición de variables: las agrupamos por tipos: formulario, campos de texto, listas de selección, checkbox, botón fuera del formulario
//Lo ideal es poner nombres descriptivos del tipo de elemento del HTML que es y un nombre identificativo, usando camelCase. Por ejemplo,
//txtNombre indica que se refiere a un input de texto y que es donde el usuario mete el nombre
const formPractica = document.getElementById("formulario");

const txtNombre = document.getElementById("nombre");
const txtApellidos = document.getElementById("apellidos");
const txtEmail = document.getElementById("email");

const selectCurso = document.getElementById("curso");
const selectTurno = document.getElementById("turno");

const checkAcepto = document.getElementById("acepto");

const btnComprueba = document.getElementById("comprueba");


//Gestión de eventos - Definición de funciones

function compruebaAceptacionNormas() {
    //Esta función comprueba si el checkbox de normas está o no marcado
    let mensaje = "";
    if (checkAcepto.checked) {
        mensaje = "Normas aceptadas";
    } else {
        mensaje = "Normas no aceptadas";
    }
    alert(mensaje);
}

//ESTO NO HACE FALTA PORQUE EL HTML YA CUMPLE LA FUNCIÓN DE COMPROBAR QUE NO SE QUEDA NINGÚN CAMPO VACÍO, con el Required en el input
//Si quisiéramos que funcionara esta función de comprobación, tendríamos que quitar el required de los elementos input del html 

//function validarDatosFormulario(event) {
    // Esta función valida los datos del formulario de entrada de alumnos
    //event.preventDefault();
    //if(txtNombre.value="") {
        //alert("No se ha introducido el nombre");
        //return;
    //}
//}

function validarDatosFormulario(event) {
    // Esta función valida los datos del formulario de entrada de alumnos
    event.preventDefault();

    let mensaje;
    mensaje = `Datos del estudiante:
    - Nombre: ${txtNombre.value}
    - Apellidos: ${txtApellidos.value}
    - email: ${txtEmail.value}
    - Acepta Normas: ${checkAcepto.checked ? "SI" : "NO"}` // Importante esto

    alert(mensaje);
    
}

btnComprueba.addEventListener("click", compruebaAceptacionNormas);

//No hace falta una 
formPractica.addEventListener("submit", validarDatosFormulario);