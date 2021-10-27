<?php  

// Llamando a los campos
$nombre = $_POST['name'];
$correo = $_POST['email'];
$mensaje = $_POST['messaje'];

// Datos para el correo
$destinatario = "santiagoguillenr19@gmail.com";
$asunto = "Contacto desde mi web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);
header('Location: send.html');
?>