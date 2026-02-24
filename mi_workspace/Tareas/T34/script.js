
// DEFINICIÓN DE VARIABLES

const formCalculadora = document.getElementById("formulario");

// DEFINICIÓN DE FUNCIONES

function calcularResultado(event) {
    event.preventDefault();
    
    const txtResultado = document.getElementById("resultado");

    // Mucho cuidado con no olvidarse de poner el parseFloat
    const numNumero1 = parseFloat(document.getElementById("num1").value);
    const numNumero2 = parseFloat(document.getElementById("num2").value);

    const selectOperacion = document.getElementById("operacion").value;

    let resultado = 0; // Importante que esto sea let, para poder reasignar su valor

    switch(selectOperacion) {
        case "sumar":
            resultado = numNumero1 + numNumero2;
            break;
        case "restar":
            resultado = numNumero1 - numNumero2;
            break;    
        case "multiplicar":
            resultado = numNumero1 * numNumero2;
            break;    
        case "dividir":
            if (numNumero2 != 0) {
                resultado = numNumero1 / numNumero2;
            }
            break;    
    }
    txtResultado.textContent = `El resultado es: ${resultado.toFixed(2)}`;
}   

// GESTIÓN DE EVENTOS

formCalculadora.addEventListener("submit", calcularResultado);