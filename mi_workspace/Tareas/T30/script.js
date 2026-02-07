//ToDo

// Para ir añadiendo tareas, basarse en algo similar a lo que hay aquí debajo, haciendo que la función cree elementos divs dentro del elemento div con el id="lista"
// Este div lista es un grid con 2 columnas (una grande y otra pequeña a su derecha), y la idea es que, al pulsar el botón de añadir, la función añada un div child 
// con el contenido de texto de la tarea y otro a su derecha con la X roja que cumpla la función de eliminar dicha tarea

//Base sobre la que trabajar, esta no es la función final
function crearLineaDatos(etiqueta, valor) {
            // 1. Crear el elemento <p>
            const p = document.createElement('p');
            
            // 2. Crear el elemento <strong> para la etiqueta (ej: "Nombre:")
            const strong = document.createElement('strong');
            strong.textContent = etiqueta + ': ';
            
            // 3. Crear el nodo de texto para el valor (ej: "Miguel")
            const textoValor = document.createTextNode(valor);
            
            // 4. "Enganchar" los hijos al padre <p>
            p.appendChild(strong);     // Añade la negrita
            p.appendChild(textoValor); // Añade el texto normal a continuación
            
            return p; // Devolvemos el párrafo completo listo para usar
        }

        // Creamos y añadimos cada línea al div resultado
        resultadoDiv.appendChild(crearLineaDatos('Nombre', nombre));
        resultadoDiv.appendChild(crearLineaDatos('Email', email));
        resultadoDiv.appendChild(crearLineaDatos('Acepta condiciones', condicionesTexto));
        resultadoDiv.appendChild(crearLineaDatos('Tipo de usuario', tipoUsuario));