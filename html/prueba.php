<!DOCTYPE html>
<html lang="es-PE">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mutual Popular       </title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800" rel="stylesheet">
    <script src="../js/jquery-3.2.1.min.js"></script>
    <!--script(src="https://code.jquery.com/jquery-3.2.1.slim.min.js", integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN", crossorigin="anonymous")-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script type="text/javascript" src="../js/main.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row hinversion hbox whitebg align-items-center">
            <form name="form1" method="post" action="envio.php">
              <table width="100%" height="391" border="0">
                <tr> 
                  <td height="108"  align="right" style="vertical-align:bottom;font-size:12pt;color:#000">Nombre: 
                  </td>
                  <td  align="left" style="vertical-align:bottom; font-size:12pt;color:#000"> <input name="txt_nombre" type="text" maxlength="200" width="150"></td>
                <tr> 
                  <td width="42%" height="24" align="right"  style="font-size:12pt;color:#000" >Telefono:</td>
                  <td width="58%" align="left"><input name="txt_fono" type="text" maxlength="200" width="150"></td>
                <tr> 
                  <td height="29" align="right"  style="font-size:12pt;color:#000">Empresa</td>
                  <td height="29" align="left"> <input name="txt_empresa" type="text" maxlength="200" width="150"></td>
                <tr> 
                  <td height="26" align="right"  style="font-size:12pt;color:#000" >Email: </td>
                  <td height="26" align="left"> <input name="txt_mail" type="text" maxlength="200" width="150"></td>
                <tr> 
                  <td height="72" align="right" style="font-size:12pt;color:#000">Consulta:</td>
                  <td height="72" align="left"> <textarea name="txt_comentario" >&nbsp;</textarea></td>
                <tr> 
                  <td height="97" align="right"><input name="hlg" type="hidden" value="<?php  echo $lg ?>">
                    </td>
                  <td height="97" align="left"><input type="submit" name="Submit" value="Submit"></td>
              </table>
            </form>
      </div>
    </div>
  </body>
</html>