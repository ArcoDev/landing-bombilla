<?php
$correoDestino = "christian@bombilladigital.com";
$nombre = $_POST['nombre'];
$tel = $_POST['tel'];
$empresa = $_POST['empresa'];
$correo = $_POST['correo'];

$contenido = "Nombre: " .$nombre.
"\nTeléfono: " .$tel.
"\nEmpresa: " .$empresa.
"\nCorreo: " .$correo;

mail($correoDestino, "Han enviado un mensaje desde tu sitio web de bombilla digital", $contenido);