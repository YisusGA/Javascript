<?php
header("Content-Type: application/json");

// Leer el JSON recibido
$textoJSON = file_get_contents("php://input");

// Convertir a array PHP (opcional pero recomendable)
$datos = json_decode($textoJSON, true);

// Comprobar si el JSON es válido
if ($datos === null) {
    echo json_encode([
        "ok Bien HEcho" => false,
        "mensaje" => "JSON no válido"
    ]);
    exit;
}

// Guardar el JSON en un fichero
file_put_contents("/var/www/html/coches.json", $textoJSON . PHP_EOL, FILE_APPEND);

// Respuesta al cliente
echo json_encode([
    "ok Guardados" => true,
    "mensaje" => "Datos guardados correctamente"
]);
?>
