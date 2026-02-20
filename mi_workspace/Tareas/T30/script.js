// DEFINICIÓN DE VARIABLES

const inputTarea = document.getElementById("tareaInput");
const botonAdd = document.getElementById("addBtn");
const listaTareas = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

// DEFINICIÓN DE FUNCIONES

function añadirTarea() {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        mensaje.textContent = "No puedes añadir una tarea vacía. El cerebro aún no carga.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);

    mensaje.textContent = "Tarea añadida correctamente.";
    inputTarea.value = "";
}

// CONTROL DE EVENTOS

// Click en botón
botonAdd.addEventListener("click", añadirTarea);

// Eventos de teclado
inputTarea.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        añadirTarea();
    }

    if (event.key === "Escape") {
        inputTarea.value = "";
        mensaje.textContent = "Input limpiado. Respira y vuelve.";
    }
});

// Delegación de eventos
listaTareas.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        mensaje.textContent = "Tarea eliminada.";
        return;
    }

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completada");
    }
});
