
// DEFINICIÓN DE VARIABLES

const formCalculadora = document.getElementById("formulario");

const txtResultado = document.getElementById("resultado");

// DEFINICIÓN DE FUNCIONES

function mostrarResultado(event) {
    event.preventDefault();

    const operacionElegida = document.getElementById("operacion").value;
    const n1 = parseFloat(formCalculadora.num1.value);
    const n2 = parseFloat(formCalculadora.num2.value);
    let result = 0; // Importante que esto sea let, para poder reasignar su valor

    switch (operacionElegida) {
        case "sumar":
            result = n1 + n2;
            break;   
        case "restar":
            result = n1 - n2;
            break;  
        case "multiplicar":
            result = n1 * n2;
            break;
        case "dividir":
            if (n2 === 0) {
                alert("División entre 0 no permitida")
            } else {
                result = n1 / n2;
            }
            break;                    
    }
    txtResultado.textContent = `El resultado es ${result.toFixed(2)}`;
}

// GESTIÓN DE EVENTOS

formCalculadora.addEventListener("submit", mostrarResultado);