
// DEFINICIÓN DE VARIABLES

const formViaje = document.getElementById("formulario");

const txtResultado = document.getElementById("resultado");

// DEFINCIÓN DE FUNCIONES

function calcularPresupuesto(event) {
    event.preventDefault();

    // Presupuesto
    const presupuestoViaje = parseFloat(formViaje.presupuesto.value);

    // Gastos
    const gastoHotel = parseFloat(formViaje.hotel.value);
    const gastoTransporte = parseFloat(formViaje.transporte.value);
    const otrosGastos = parseFloat(formViaje.otros.value);

    // Resultado
    const result = (presupuestoViaje - gastoHotel - gastoTransporte - otrosGastos).toFixed(2);
    if (result >= 0) {
        txtResultado.textContent = `Podemos irnos de viaje, nos sobran ${result} euros`
        // Al ser esto un div, no se puede seleccionar como se ve debajo
        // formViaje.resultado.textContent = `Podemos irnos de viaje, nos sobran ${result} euros` 
    } else {
        txtResultado.textContent = `No podemos irnos de viaje, nos faltan ${Math.abs(result)} euros`
    }
    
}

// GESTIÓN DE EVENTOS

formViaje.addEventListener("submit", calcularPresupuesto);
