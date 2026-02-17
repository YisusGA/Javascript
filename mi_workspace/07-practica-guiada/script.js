// DEFINICIÓN DE VARIABLES
const formAlta = document.getElementById("formulario");

const txtNombre = document.getElementById("nombre");
const txtCorreo = document.getElementById("email");
const txtDestino = document.getElementById("destino");
const txtResultado = document.getElementById("resultado");

// DEFINICIÓN DE FUNCIONES

function calcularTotal(event) {
    event.preventDefault();

    // Obtener valores de entrada

    // Presupuesto
    // El parseFloat convierte a decimal la entrada. No olvidarse de poner el .value al final
    let numberPresupuesto = parseFloat(document.getElementById("presupuesto").value); 

    //Gastos
    let numberHotel = parseFloat(document.getElementById("hotel").value);
    let numberTransporte = parseFloat(document.getElementById("transporte").value);
    let numberOtros = parseFloat(document.getElementById("otros").value);

    //Calcular
    let totalViaje = numberPresupuesto - (numberHotel + numberTransporte + numberOtros);

    if (totalViaje >= 0) {
        //el toFixed(2) hace que se muestre el número sólo con 2 decimales
        txtResultado.textContent = "Sí podemos irnos de viaje y nos sobran " + totalViaje.toFixed(2) + " euros";
    } else {
        txtResultado.textContent = "No podemos irnos de viaje y nos sobran " + totalViaje.toFixed(2) + " euros";
    }
}

// GESTIÓN DE EVENTOS

formAlta.addEventListener("submit", calcularTotal);