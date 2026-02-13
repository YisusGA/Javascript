const input = document.getElementById("texto");
const boton = document.getElementById("addButton");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

function añadirTarea() {
    const texto = input.value.trim();

    if (texto === "") {
        mensaje.textContent = "No puedes añadir una tarea vacía. El cerebro aún no carga.";
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    mensaje.textContent = "Tarea añadida correctamente.";
    input.value = "";
}

// Click en botón
boton.addEventListener("click", añadirTarea);

// Eventos de teclado
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        añadirTarea();
    }

    if (event.key === "Escape") {
        input.value = "";
        mensaje.textContent = "Input limpiado. Respira y vuelve.";
    }
});

// Delegación de eventos
lista.addEventListener("click", (event) => {

    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        mensaje.textContent = "Tarea eliminada.";
        return;
    }

    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completada");
    }
});
