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
    $('#aJoya').html("¡El total aprobado por una joya de " + peso +" gramos es de <span class='boldT'> S/." + total+"!</span>");
  }
  else{
    $('#aJoya').html("El peso ingresado no es válido"); 
  }
}

function calcElec(){
  var fecha=document.getElementById('fecha').value;
  var pElec=document.getElementById('pElec').value;
  if (fecha < 2017){
    var dif = 2017 - fecha;
    var p = 1 - (dif/10);
    var total = pElec * p / 3;
    console.log(total);
    $('#aElec').html("¡El total aprobado por tu electrodoméstico es de <span class='boldT'> S/." + total + "!</span>");
  }
  else{
    $('#aElec').html("El año ingresado no es válido"); 
  }
}

function calcVehiculo(){
  var fecha=document.getElementById('fechaV').value;
  var pElec=document.getElementById('pVehiculo').value;
  if (fecha < 2017){
    var dif = 2017 - fecha;
    var p = 1 - (dif/10);
    var total = pElec * p / 3;
    console.log(total);
    $('#aVehiculo').html("¡El total aprobado por tu Vehículo es de <span class='boldT'> S/." + total + "!</span>");
  }
  else{
    $('#aVehiculo').html("El año ingresado no es válido"); 
  }
}

function calcInmu(){
  var fecha=document.getElementById('fechaI').value;
  var pElec=document.getElementById('pInmu').value;
  if (fecha < 2017){
    var dif = 2017 - fecha;
    var p = 1 - (dif/10);
    var total = pElec * p / 8;
    console.log(total);
    $('#aInmu').html("¡El total aprobado por tu Inmueble es de <span class='boldT'> S/." + total + "!</span>");
  }
  else{
    $('#aInmu').html("El año ingresado no es válido"); 
  }
}
