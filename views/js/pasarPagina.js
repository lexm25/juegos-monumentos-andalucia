//Se establecen los segundos y mintos a cero para el Cronómetro y
// la provincia a uno y el modal a false que no se ha mostrado aún
var s = 0;
var m = 0;
var provincia= 1;
var modalShown=false;

$(document).ready(function () {
    //Registro de evento al presionar la tecla flecha para mover a la derecha
    $(document).on("keydown", mover);
    //Si se cierra el modal, puede continuar moviéndose
    $(".btn , .btn-close").on("click",function() {
        $(document).on("keydown", mover);
    })
    //Se establece el valor inicial del cronómetro
    $("#cronometro").text(m + ":" + s);

    //Actualizar nuestro cronómetro cada segundo
     setInterval(() => {
         s++;
         if (s >= 60) {
             m++;
             s = 0;
         }
        
        $("#cronometro").text(m + ":" + s);
     }, 1000);

});

//Mueve el muñeco hacia derecha y cuando llega alfinal del camino pasa a la sigueinet provincia
function mover(e) {
    e.preventDefault();
    if (e.keyCode == 39) {
        //Movimiento de la hormiga
        if($("#div img").attr("src")== "./../images/ant2.png"){
            $("#div img").attr("src","./../images/ant1.png");
        }else{
            $("#div img").attr("src","./../images/ant2.png");
        }

        var left = parseInt($("#div").css("left")) + 10;
        $("#div").css("left", left + "px");
        if (parseInt($("#div").css("left").split(/px/)[0]) >= parseInt($("#monumento").css("left").split(/px/)[0])) {
            if(modalShown==false){
                modalShown=true;
                $(document).off("keydown");
                $("#modal").modal("show");
            }
        }
    }

    //Si el muñeco ha llegado hasta el final de la pantalla 
    if (window.innerWidth <=left + parseInt($("#div").css("width").split(/px/)[0])) {
        modalShown=false;
        //Empezar el muñeco desde el inicio de la pantalla
        $("#div").css("left","0px");

        //Petición al servidor para recoger los datos de la provincia actual y cambiar el entorno con los datos recibidos
        $.ajax({
            data: {'id' : provincia},
            url: "./../index.php?controller=provincia&action=dameProvincia",
            type: "get",
            success: function (response) {
                var provincia= JSON.parse(response);
                $("#fondo").css("background","linear-gradient(rgba(255, 255, 255, 0.267), rgba(255, 255, 255, .5)), url(./../images/"+provincia[0].fondo + ")");
                $("#monumento").attr("src","./../images/"+provincia[0].imagen);
            }
        });
        provincia++;

        //Enviar los datos al servidor en el caso de la última provincia
        if (provincia == 4) {
            var sBD=s,mBD=m;
            if(s<9){
                sBD="0" + s;
            }
            if(m<9){
                mBD="0" + m;
            }
            var datos = {
                vida: sessionStorage.getItem("vida"),
                puntos: sessionStorage.getItem("puntos"),
                tiempo: "00:"  +mBD + ":" +sBD,
            };

            $.ajax({
                data: datos,
                url: "./../index.php?action=actualizar",
                type: "post",
                success: function () {
                    //Vamos a la página de resultado
                    window.location.replace("http://localhost/juegos-monumentos-andalucia/index.php?action=resultado");
                }
            });
        }
       
    }
}

