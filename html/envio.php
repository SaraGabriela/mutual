<?php 
error_reporting(0); 

$nombre = $_POST['txt_nombre']; 
$asunto= $_POST['txt_asunto']; 
$mail=$_POST['txt_mail']; 
$comentario=$_POST['txt_comentario']; 
$header = 'From: ' . $mail; 
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n"; 
$header .= "Mime-Version: 1.0 \r\n"; 
$header .= "Content-Type: text/plain"; 


$mensaje = "Este mensaje fue enviado por: " . $nombre . " \r\n"; 
$mensaje = "El asunto es: " . $asunto . " \r\n"; 
$mensaje .= "Su e-mail es: " . $mail . " \r\n"; 
$mensaje .="Mensaje:".$_POST['txt_comentario'] . " \r\n"; 
$mensaje .= "Enviado el :" . date('d/m/Y', time()); 

$para = 'informes@mutualpopular.com'; 
$asunto = 'Contacto: Web Mutual Popular'; 

mail($para, $asunto, utf8_decode($mensaje), $header); 

$rpta= 'Su mensaje ha sido enviado correctamente'; 

header("Location: http://www.mutualpopular.com/html/contacto.php"); /* Redirección del navegador */

/* Asegurándonos de que el código interior no será ejecutado cuando se realiza la redirección. */
exit;

 ?>

 ?>
