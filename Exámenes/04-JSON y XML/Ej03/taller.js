let formTaller = document.getElementById("formularioTaller");
formTaller.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    let clienteTxt = document.getElementById("cliente").value;
    let matriculaTxt = document.getElementById("matricula").value;
    let vehiculoTxt = document.getElementById("vehiculo").value;
    let averiaTxt = document.getElementById("averia").value;
    let prioridadTxt = document.querySelector('input[name="prioridad"]:checked').value;
    let costeTxt = document.getElementById("coste").value;
    let estadoTxt = document.getElementById("estado").value;

    let resultado = {
        cliente: clienteTxt,
        matricula: matriculaTxt,
        vehiculo: vehiculoTxt,
        averia: averiaTxt,
        prioridad: prioridadTxt,
        coste: costeTxt,
        estado: estadoTxt
    }

    let resultadoJSON = JSON.stringify(resultado);
    document.getElementById("salidaJSON").textContent = resultadoJSON;
}