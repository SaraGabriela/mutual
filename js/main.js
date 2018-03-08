$(document).ready( function(){

$('.carousel').carousel({
  interval: 2500
});

$('.tabLink').click(function(){
$('.active').removeClass('active');
$(this).addClass('active');
});

$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();

$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(target).addClass('visible');
    $(tabgroup).children('div').hide();
});

var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
});

function calcJoya(){
  var peso=document.getElementById('peso').value;
  if (peso >0){
    var total = peso * 100;
    console.log(total);
    $('#aJoya').html("¡El total pre-aprobado por una joya de 18K de " + peso +" gramos es de <span class='boldT'> S/." + total+"!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");
  }
  else{
    $('#aJoya').html("El peso ingresado no es válido"); 
  }
}

function calcElec(){
  var fecha=document.getElementById('fecha').value;
  var pElec=document.getElementById('pElec').value;
  var d = new Date();
  var n = d.getFullYear();
  if (fecha < n){
    var dif = n - fecha;
    var p = 1 - (dif/10);
    var total = pElec * p / 3;
    total = parseInt(total);
    if (total <= 0){
      $('#aElec').html("Cálculo no válido. ¡Comunícate con nosotros para mayor información!");     
    }
    else{
    $('#aElec').html("¡El total pre-aprobado por tu electrodoméstico es de <span class='boldT'> S/." + total + "!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");      
    }
    console.log(total);
  }
  else if(fecha == n){
    total = pElec /3;
    total = parseInt(total);
    $('#aElec').html("¡El total pre-aprobado por tu electrodoméstico es de <span class='boldT'> S/." + total + "!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");    
  }
  else{
    $('#aElec').html("El año ingresado no es válido"); 
  }
}

function calcVehiculo(){
  var fecha=document.getElementById('fechaV').value;
  var pElec=document.getElementById('pVehiculo').value;
  var d = new Date();
  var n = d.getFullYear();  
  if (fecha < n){
    var dif = n - fecha;
    var p = 1 - (dif/10);
    var total = pElec * p / 3;
    total = parseInt(total);
    if (total <= 0 || total > 30000){
      $('#aVehiculo').html("Cálculo no válido. ¡Comunícate con nosotros para mayor información!");     
    }
    else{
    $('#aVehiculo').html("¡El total pre-aprobado por tu Vehículo es de <span class='boldT'> S/." + total + "!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");  
    }
    console.log(total);
  }
  else if(fecha == n){
    total = pElec /3;
    total = parseInt(total);
    $('#aVehiculo').html("¡El total pre-aprobado por tu Vehículo es de <span class='boldT'> S/." + total + "!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");    
  }
  else{
    $('#aVehiculo').html("El año ingresado no es válido"); 
  }
}

function calcInmu(){
  var pElec=document.getElementById('pInmu').value;  
    var total = pElec * 45;
    total = parseInt(total);
    if (total <= 0){
      $('#aInmu').html("Cálculo no válido. ¡Comunícate con nosotros para mayor información!");     
    }    
    else{
      $('#aInmu').html("¡El total pre-aprobado por tu Inmueble es de <span class='boldT'> S/." + total + "!</span><br></br><span style='font-size:1.2rem !important;'>Podemos mejorar este cálculo... ¡Contáctanos!<span>");
    }
    console.log(total);
}

function inver(deci,monto,meses){

    i = monto * deci;
    tot = monto + i;
    cobra = i / meses;
    tot = parseInt(tot);
    cobra = parseInt(cobra);
 $('#aInversion').html("¡Al invertir S/."+monto+" tu monto total es de <span class='boldT'>S/."+tot+"!</span><br></br>El monto que cobras mensualmente es de S/."+cobra+"<br></br><span style='font-size:1.2rem;'>Pagamos mucho más que cualquier banco o financiera ¡Conviertete en inversionista!</span>");   
}

function calcInv(){
  var monto=document.getElementById('montoI').value;
  var meses=document.getElementById('meses').value;

  monto = Number(monto);
  meses = Number(meses);
  if(meses>=1 && meses <=12){
  if(monto <= 0){
  $('#aInversion').html("El monto ingresado no es válido");  
  }
  else if(monto > 0 && monto <= 1000){
    inver(0.12,monto,meses);
  }
  else if(monto > 1000 && monto <= 3000){
    inver(0.15,monto,meses);
  }
  else if(monto > 3000 && monto <= 5000){
    inver(0.18,monto,meses);
  }
  else if(monto > 5000){
    inver(0.2,monto,meses);
  }
}
else{
  $('#aInversion').html("La cantidad de meses ingresada no es válida. El máximo permitido es 12.");  
}
}