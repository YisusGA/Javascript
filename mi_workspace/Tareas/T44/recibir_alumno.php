<?php
// Indicamos que la respuesta será JSON
header("Content-Type: application/json");

// Ruta del fichero
$fichero = "/var/www/html/datos.json";

// 1. Leemos el JSON que llega del formulario
$textoJSON = file_get_contents("php://input");
$nuevoInvitado = json_decode($textoJSON, true);

// Comprobar si el JSON recibido es válido
if ($nuevoInvitado === null) {
    echo json_encode([
        "ok" => false,
        "mensaje" => "JSON no válido"
    ]);
    exit;
}

// 2. LEER lo que ya hay en el fichero
$invitadosExistentes = [];
if (file_exists($fichero)) {
    $contenidoActual = file_get_contents($fichero);
    $invitadosExistentes = json_decode($contenidoActual, true);
    
    // Si el fichero estaba vacío o corrupto, nos aseguramos de tener un array
    if (!is_array($invitadosExistentes)) {
        $invitadosExistentes = [];
    }
}

// 3. AÑADIR el nuevo invitado al array
$invitadosExistentes[] = $nuevoInvitado;

// 4. GUARDAR todo el array actualizado (sobrescribiendo el fichero, sin FILE_APPEND)
file_put_contents($fichero, json_encode($invitadosExistentes, JSON_PRETTY_PRINT));

// Devolvemos respuesta al navegador
echo json_encode([
    "ok" => true,
    "mensaje" => "Alumno guardado correctamente"
]);
?>
