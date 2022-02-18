//Se establecen los segundos y mintos a cero para el Cronómetro y
// la provincia a uno y el modal a false que no se ha mostrado aún
var s = 0;
var m = 0;
var provincia = 1;
sessionStorage.setItem('idProvincia', provincia);
var modalShown = false;
var objProvincia = [];
sessionStorage.setItem("vida", 5);
sessionStorage.setItem("puntos", 0);

$(document).ready(function () {
    $("#login").click(function () {
        sessionStorage.setItem("mote", $("#mote").val());
        if($("#mote").val()!=0){
            window.location.replace("./views/provinciaBorrador.html");
        }else{
            $("#mote").parent().parent().parent().append("<div class='text-danger'>Introduce un nombre porfavor</div>"); 
        }
    })
    $("#vidas").append("<i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='far fa-heart'></i>")
    $("#modalMunieco").modal("show");
    $("#modalMuniecoEvento").click(function () {
        var muniecoSeleccionado = [...$(this).parent().parent().find(".modal-body").children()].filter((m) => m.checked == true);
        if(muniecoSeleccionado.length!=0){
            $("#modalMunieco").modal("hide");
            $("#munieco").append("<img src='"+$("#" + muniecoSeleccionado[0].id).next().children()[0].src+"' width='200px' height='200px'>")
        }else{
            if(!$("#modalMunieco .modal-body").children().last().hasClass("text-danger")){
                $("#modalMunieco .modal-body").append("<div class='text-danger py-3 h5'>¡¡¡¡Tienes que seleccionar un muñeco!!!!</div>")
            }
        }

        //Empieza con un sonido del animal
        if ($("#munieco img").attr("src").split(/images/)[1].match(/^\/Dog2/)) {
            $("body").append("<audio src='./../images/Dog2/b15adefc3c12f758b6dc6a045362532f.wav' autoplay></audio>")
        } else if ($("#munieco img").attr("src").split(/images/)[1].match(/^\/Bear/)) {
            $("body").append("<audio src='./../images/Bear-walking/beargrowl.mp3' autoplay></audio>")
        } else if ($("#munieco img").attr("src").split(/images/)[1].match(/^\/Cat/)) {
            $("body").append("<audio src='./../images/Cat/83c36d806dc92327b9e7049a565c6bff.wav' autoplay></audio>")
        } else {
            $("body").append("<audio src='./../images/Crab/83a9787d4cb6f3b7632b4ddfebf74367.wav' autoplay></audio>")
        }

        $('#modal input[type="radio"]').change(controlarPreguntas);


        //Si cierra el modal y no ha acertado
        /*  var last=  $("#vidas").last();
          for (let i = 4; i >= 0; i++) {
              if(last.hasClass("fas")){
                 last.removeClass("fas").addClass("fal");
                 sessionStorage.setItem("vida" ,parseInt(sessionStorage.getItem("vida")) - 1 );
                 break;
              }else{
                  if(i==0){
                      //GameOver : Ir a la página de Register o una página de GameOver que ha perdido toda la vida
                  }
                  last=last.parent().eq(i);
              }
          }
  
  */
    })


    //Si se cierra el modal, puede  moverse
    $(".botonCerrar").on("click", function () {
        $(document).on("keydown", mover);
        
        $("#modal modal-body text-center input.btn-check").attr("disabled",false);
        $("#modal modal-body label.btn-outline-success").removeClass("btn-outline-success").addClass("btn-outline-info");
    })
    //Se establece el valor inicial del cronómetro
    $("#cronometro").text("00:00");

    //Actualizar nuestro cronómetro cada segundo

    setInterval(() => {
        s++;
        if (s >= 60) {
            m++;
            s = 0;
        }
        var sBD = s;
        var mBD = m;
        if (s < 10) {
            sBD = "0" + s;
        }
        if (m < 10) {
            mBD = "0" + m;
        }
        $("#cronometro").text(mBD + ":" + sBD);
    }, 1000);

});

//Mueve el muñeco hacia derecha y cuando llega alfinal del camino pasa a la sigueinet provincia
function mover(e) {
    e.preventDefault();
    if (e.keyCode == 39) {
        //Movimiento del muñeco
        //Si es el oso
        switch ($("#munieco img").attr("src").split(/images/)[1]) {
            case "/Bear-walking/0a38a860f2e573b8dc5b09f390d30fbd.svg":
                $("#munieco img").attr("src", "./../images/Bear-walking/6d4d06e3f4cd0c9455b777b9a40782b6.svg");
                break;
            case "/Bear-walking/6d4d06e3f4cd0c9455b777b9a40782b6.svg":
                $("#munieco img").attr("src", "./../images/Bear-walking/7453709bef16e33e6f989aee14d7fc07.svg");
                break;
            case "/Bear-walking/7453709bef16e33e6f989aee14d7fc07.svg":
                $("#munieco img").attr("src", "./../images/Bear-walking/d2a5f124f988def1d214e6d0813a48f3.svg");
                break;
            case "/Bear-walking/d2a5f124f988def1d214e6d0813a48f3.svg":
                $("#munieco img").attr("src", "./../images/Bear-walking/0a38a860f2e573b8dc5b09f390d30fbd.svg");
                break;
        }

        //Si es el gato
        switch ($("#munieco img").attr("src").split(/images/)[1]) {
            case "/Cat/0fb9be3e8397c983338cb71dc84d0b25.svg":
                $("#munieco img").attr("src", "./../images/Cat/bcf454acf82e4504149f7ffe07081dbc.svg");
                break;
            case "/Cat/bcf454acf82e4504149f7ffe07081dbc.svg":
                $("#munieco img").attr("src", "./../images/Cat/0fb9be3e8397c983338cb71dc84d0b25.svg");
                break;
        }
        //Si es el perro
        switch ($("#munieco img").attr("src").split(/images/)[1]) {
            case "/Dog2/6afc06388d69f99e28d883126f9b2734.svg":
                $("#munieco img").attr("src", "./../images/Dog2/66b435d333f34d02d5ae49a598bcc5b3.svg");
                break;
            case "/Dog2/66b435d333f34d02d5ae49a598bcc5b3.svg":
                $("#munieco img").attr("src", "./../images/Dog2/4708bff29b3a295a03ac1d5e2d16ec75.svg");
                break;
            case "/Dog2/4708bff29b3a295a03ac1d5e2d16ec75.svg":
                $("#munieco img").attr("src", "./../images/Dog2/6afc06388d69f99e28d883126f9b2734.svg");
                break;
        }

        //Si es el cangrejo
        switch ($("#munieco img").attr("src").split(/images/)[1]) {
            case "/Crab/49839aa1b0feed02a3c759db5f8dee71.svg":
                $("#munieco img").attr("src", "./../images/Crab/f7cdd2acbc6d7559d33be8675059c79e.svg");
                break;
            case "/Crab/f7cdd2acbc6d7559d33be8675059c79e.svg":
                $("#munieco img").attr("src", "./../images/Crab/49839aa1b0feed02a3c759db5f8dee71.svg");
                break;
        }
        var left = parseInt($("#munieco").css("left")) + 10;
        $("#munieco").css("left", left + "px");
        controlarModalMonumento(left);

    }

    function controlarModalMonumento(leftMunieco) {
        if (parseInt($("#munieco").css("left").split(/px/)[0]) >= parseInt($("#monumento").css("left").split(/px/)[0])) {
            if (modalShown == false) {
                modalShown = true;
                $(document).off("keydown");
                $("#modal").modal("show");

                crearArbolPreguntas();
            }
        }
        finalPantalla(leftMunieco);
    }

    //Si pulsa la tecla Space, salta
    if (e.keyCode == 32) {
        $("#munieco").animate({
            top: "-=100" + "px",
            left: "+=30" + "px"
        }, 500, function () {
            if ($("#heart").length > 0) {
                var munLeft = parseInt($("#munieco img").attr("width").split(/px/)[0]) + parseInt($("#munieco").css("left").split(/px/)[0]);
                var heartLeft = parseInt($("#heart").css("left").split(/px/)[0]);
                var heartwidth = parseInt($("#heart").attr("width").split(/px/)[0]) + heartLeft;
                var munTop = parseInt($("#munieco").css("top").split(/px/)[0]);
                var heartTop = parseInt($("#heart").css("top").split(/px/)[0]);

                //Si se come el corazón
                if (munLeft >= heartLeft && munLeft <= (heartwidth + 100) && munTop >= heartTop) {
                    if (parseInt(sessionStorage.getItem("vida")) < 6) {
                        sessionStorage.setItem("vida", parseInt(sessionStorage.getItem("vida")) + 1);
                        $("body").append("<audio src='./../images/heart.mp3' autoplay></audio>");

                        $("#heart").animate({
                            width: "+=20" + "px",
                            height: "+=20" + "px",
                        }, 500, function () { }).animate({
                            left: ($(window).width()*3)/4,
                            top: "20",
                            width: "0" + "px",
                            height: "0" + "px",
                        }, 500, function () {
                            $("#heart").remove();
                            var first = $("#vidas").children().first();
                            for (let i = 1; i <= 5; i++) {
                                if (first.hasClass("far")) {
                                    first.removeClass("far").addClass("fas");
                                    break;
                                } else {
                                    first = $("#vidas").children().eq(i);
                                }
                            }
                        });
                    }

                }
            }
        }).animate({
            top: "+=100" + "px",
            left: "+=30" + "px"
        }, 500, function () {
            controlarModalMonumento(parseInt($("#munieco").css("left")));
        });



    }
}

function finalPantalla(leftMunieco) {
    //Si el muñeco ha llegado hasta el final de la pantalla 
    if (window.innerWidth <= leftMunieco + parseInt($("#munieco").css("width").split(/px/)[0])) {
        modalShown = false;
        //Empezar el muñeco desde el inicio de la pantalla
        $("#munieco").css("left", "0px");

        //Petición al servidor para recoger los datos de la provincia actual y cambiar el entorno con los datos recibidos
        $.ajax({
            data: { 'id': provincia },
            url: "./../index.php?controller=provincia&action=dameProvincia",
            type: "get",
            success: function (response) {
                var provincia = JSON.parse(response);
                $("#fondo").css("background", "linear-gradient(rgba(255, 255, 255, 0.267), rgba(255, 255, 255, .5)), url(./../images/" + provincia[0].fondo + ")");
                $("#monumento").attr("src", "./../images/" + provincia[0].imagen);
            }
        });
        provincia++;

        //Enviar los datos al servidor en el caso de la última provincia
        if (provincia == 3) {
            var sBD = s, mBD = m;
            if (s < 9) {
                sBD = "0" + s;
            }
            if (m < 9) {
                mBD = "0" + m;
            }
            var datos = {
                mote: sessionStorage.getItem("mote"),
                vida: sessionStorage.getItem("vida"),
                puntos: sessionStorage.getItem("puntos"),
                tiempo: "00:" + $("#cronometro").text(),
            };

                $.ajax({
                    data: datos,
                    url: "./../index.php?action=registrar",
                    type: "post",
                    success: function () {
                        //Vamos a la página de resultado
                        window.location.replace("../index.php?action=resultado");
                    }
                });
           
        }

    }
}

// Eddy función
function controlarPreguntas(){
    $(this).parent().children().attr("disabled",true);
    var texto =$(this).next().text();
    
    if(texto == objProvincia[0].respuestaCorrecta){
        sessionStorage.setItem("puntos",sessionStorage.getItem("puntos") + 100);
        $(this).attr("disabled",false);
        $(this).next().removeClass("btn-outline-info").addClass("btn-outline-success");

        
        
    }else{
        $(this).addClass("btn-danger");
        // buscar el label correcto y ponerlo a verde
        // y después quitar 1 vida y llevarlo a gameOver un modal que pregunta si quieres repetir
        // si dice que si lleva otra vez a la pantalla de seleccion de personajes
        // si dice que no que lleve a la pantalla de INICIO ingresar mote
    }

}

function crearArbolPreguntas() {
    var datos = {
        id: provincia
    };

    $.ajax({
        url: '../index.php?controller=preguntas&action=damePregunta',
        data: datos,
        type: "get",
    
        success: function (response) {
            
            objProvincia = JSON.parse(response);
            $("#modal img").attr("src", "./../images/" + objProvincia[0].img);
            
            $("#modal .modal-title").text(objProvincia[0].pregunta);

            var labels = [...$("#modal label")];
            var posicionCorrecta = Math.floor(Math.random() * 3);
            var contResp = 1;

            for (let i = 0; i < labels.length; i++) {
                
                if(i == posicionCorrecta){
                    $("#modal #danger-outlined-" + (i + 1)).next().text(objProvincia[0].respuestaCorrecta);
                } else{
                    $("#modal #danger-outlined-" + (i + 1)).next().text(objProvincia[0]["respuesta" + contResp]);
                    contResp++;
                    
                }
            }

        }
    });
}