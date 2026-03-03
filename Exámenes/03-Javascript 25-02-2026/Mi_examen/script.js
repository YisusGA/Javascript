
// DEFINICIÓN DE VARIABLES

// Formulario de acceso
const formAcceso = document.getElementById("solicitudForm");

const bodyObj = document.querySelector("body");

const txtNombre = document.getElementById("nombre");
const txtApellidos = document.getElementById("apellidos");
const txtEmail = document.getElementById("email");
const txtExperiencia = document.getElementById("experiencia");

const selectArea = document.getElementById("area");
const selectDisponibilidad = document.getElementById("disponibilidad");

const checkConfirmo = document.getElementById("legal");
const checkAcepto = document.getElementById("rgpd");

const txtVisualizacion = document.getElementById("previsualizacion");

// Calculadora

const txtNum1 = document.getElementById("numA");
const txtNum2 = document.getElementById("numB");

const botonSuma = document.getElementById("btnSuma");
const botonResta = document.getElementById("btnResta");
const botonMultiplica = document.getElementById("btnMultiplica");

const txtResultado = document.getElementById("resultadoCalc");

// DEFINICIÓN DE FUNCIONES

// Formulario de acceso

function validarDatos(event) {
    event.preventDefault();

    if (txtNombre.value === "" || txtApellidos.value === "" || txtEmail.value === "" || txtExperiencia.value === "" || selectArea.value === "" || selectDisponibilidad.value === "") {
        alert("Se deben rellenar todos los campos");
        return;
    }
    
    if (checkConfirmo.checked && checkAcepto.checked) {
        txtVisualizacion.textContent = `
        El candidato ${txtNombre.value} ${txtApellidos.value} confirma que tiene ${txtExperiencia.value} años de
        experiencia en ${selectArea.value}. Tiene una
        disponibilidad ${selectDisponibilidad.value} y acepta el tratamiento de datos.
        `;

    } else {
        alert("Se debe confirmar que los datos son veraces y aceptar el tratamiento de datos");
    }

};

function bodyGreen() {
    bodyObj.className = '';
    bodyObj.classList.add("body-green");
}

function bodyRed() {
    bodyObj.className = '';
    bodyObj.classList.add("body-red");
}

// Calculadora

function calcularSuma() {
    if (txtNum1.value != "" && txtNum2.value != "") {
        let result = parseFloat(txtNum1.value) + parseFloat(txtNum2.value);
        txtResultado.textContent = `El resultado es: ${result}`;
    }    
};

function calcularResta() {
    if (txtNum1.value != "" && txtNum2.value != "") {
        let result = parseFloat(txtNum1.value) - parseFloat(txtNum2.value);
        txtResultado.textContent = `El resultado es: ${result}`;
    }    
};

function calcularMultiplicacion() {
    if (txtNum1.value != "" && txtNum2.value != "") {
        let result = parseFloat(txtNum1.value) * parseFloat(txtNum2.value);
        txtResultado.textContent = `El resultado es: ${result}`;
    }
};

// GESTIÓN DE EVENTOS

// Formulario de acceso

formAcceso.addEventListener("submit", validarDatos);
formAcceso.addEventListener("mouseover", bodyRed);
formAcceso.addEventListener("mouseout", bodyGreen);



// Calculadora

botonSuma.addEventListener("click", calcularSuma);
botonResta.addEventListener("click", calcularResta);
botonMultiplica.addEventListener("click", calcularMultiplicacion);