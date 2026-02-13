const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const condiciones = document.getElementById("condiciones");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener radio seleccionado
    const tipoSeleccionado = document.querySelector('input[name="tipo"]:checked');

    // Preparar datos
    const nombreValor = nombre.value;
    const emailValor = email.value;
    const condicionesValor = condiciones.checked ? "Sí" : "No";
    const tipoValor = tipoSeleccionado ? tipoSeleccionado.value : "No seleccionado";

    // Mostrar resultados en el HTML
    resultado.innerHTML = `
        <p><strong>Nombre:</strong> ${nombreValor}</p>
        <p><strong>Email:</strong> ${emailValor}</p>
        <p><strong>Acepta condiciones:</strong> ${condicionesValor}</p>
        <p><strong>Tipo de usuario:</strong> ${tipoValor}</p>
    `;
});
