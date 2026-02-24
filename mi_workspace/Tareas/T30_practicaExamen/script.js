
// DEFINICIÓN DE VARIABLES

const txtTarea = document.getElementById("tareaInput");
const txtMensaje = document.getElementById("mensaje");

const txtLista = document.getElementById("lista");

const botonAdd = document.getElementById("addBtn");

// DEFINCIÓN DE FUNCIONES

function addTarea() {
    const texto = txtTarea.value.trim();
    if (texto === "") {
        mensaje.textContent = "No se puede añadir una tarea vacía";
        return;
    }
    const elementoLista = document.createElement("li");
    elementoLista.textContent = texto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";

    elementoLista.appendChild(botonEliminar);
    txtLista.appendChild(elementoLista);
    mensaje.textContent = "Tarea añadida correctamente";
    txtTarea.value = "";
}

// GESTIÓN DE EVENTOS

botonAdd.addEventListener("click", addTarea);

txtTarea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTarea();
    } 
    if (event.key === "Escape") {
        txtTarea.value = "";
        txtMensaje.textContent = "Tarea limpiada";
    }
});

// Delegación de eventos
txtLista.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        txtMensaje.textContent = "Tarea eliminada";
        return;
    }
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completada");
        txtMensaje.textContent = "Tarea completada";
    }
});