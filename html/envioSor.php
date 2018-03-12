<?php 
error_reporting(0); 

$nombre = $_POST['txt_nombre']; 
$apellido= $_POST['txt_apellido']; 
$mail=$_POST['txt_mail']; 
$dni=$_POST['txt_dni']; 
$header = 'From: ' . $mail; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 


$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n"; 
$mensaje = "Su apellido es: " . $apellido . " \r\n"; 
$mensaje = "Su DNI es: " . $dni . " \r\n"; 
$mensaje .= "Su e-mail es: " . $mail . " \r\n"; 
/*$mensaje .="Mensaje:".$_POST['txt_comentario'] . " \r\n"; */
$mensaje .= "Enviado el :" . date('d/m/Y', time()); 

$para = 'jdiaz@mutualpopular.com'; 
$asunto = 'Participante de sorteo'; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

$rpta= 'Su mensaje ha sido enviado correctamente'; 

header("Location: http://www.mutualpopular.com/html/sorteo.php"); /* Redirección del navegador */

/* Asegurándonos de que el código interior no será ejecutado cuando se realiza la redirección. */
exit;

 ?>

 ?>
