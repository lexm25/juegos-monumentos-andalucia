//Se establecen los segundos y mintos a cero para el Cronómetro y
// la provincia a uno y el modal a false que no se ha mostrado aún
var s = 0;
var m = 0;
var segundosSalto = 0;
var provincia = 1;
var modalShown = false;
//Array de preguntas
var objPreguntas = [];
var vida= 5;
var puntos= 0;

$(document).ready(function () {

    $("#login").click(function () {
        sessionStorage.setItem("mote", $("#mote").val());
        if ($("#mote").val() != 0) {
            window.location.replace("./views/provincia.html");
        } else {
            $("#mote").parent().parent().parent().append("<div class='text-danger'>Introduce un nombre porfavor</div>");
        }
    })
    $("#vidas").append("<i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i><i class='fas fa-heart'></i>")
    $("#modalMunieco").modal("show");
    $("#modalMuniecoEvento").click(function () {
        var muniecoSeleccionado = [...$(this).parent().parent().find(".modal-body").children()].filter((m) => m.checked == true);
        if (muniecoSeleccionado.length != 0) {
            $("#modalMunieco").modal("hide");
            $("#munieco").append("<img src='" + $("#" + muniecoSeleccionado[0].id).next().children()[0].src + "' width='200px' height='200px' style='position:relative;top:150px'>")
        } else {
            if (!$("#modalMunieco .modal-body").children().last().hasClass("text-danger")) {
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

    })


    //Si se cierra el modal, puede  moverse
    // Cuando pulse cerrar en el modal de las preguntas, las seleccion del botón y el color se resetearan
    $(".botonCerrar").on("click", function () {
        $(document).on("keydown", mover);

        //habilitar los botones
        $('input[name="options-outlined"]').prop('disabled', false);

        //Quitar el marcado del radio y reestablecer el color de fondo del boton cuando es correcto
        $(" #modal label.btn-outline-success").prev().prop("checked", false);
        $(" #modal label.btn-outline-success").removeClass("btn-outline-success").addClass("btn-outline-info");
        //Quitar el marcado del radio y reestablecer el color de fondo del boton cuando es incorrecto
        $(" #modal label.btn-outline-danger").prev().prop("checked", false);
        $(" #modal label.btn-outline-danger").removeClass("btn-outline-danger").addClass("btn-outline-info");

        //Quitar el marcado de la respuesta correcta que aparec cuando falla la pregunta
        $(" #modal label.bg-success").removeClass("bg-success").addClass("btn-outline-info");

        //borrar el div de descripcion
        $("#modal div[id=descripcion]").remove();

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
        //Movimiento Nubes
        $(".nubes:first").css("left", parseInt($(".nubes:first").css("left")) - 1);
        $("#nube3").css("left", parseInt($("#nube3").css("left")) - 1);
        $("#nube2").css("left", parseInt($("#nube2").css("left")) - 1);
        $("#nube4").css("left", parseInt($("#nube4").css("left")) - 1);
        $("#nube5").css("left", parseInt($("#nube5").css("left")) - 1);
        $("#nube6").css("left", parseInt($("#nube6").css("left")) - 1);
        $("#nube7").css("left", parseInt($("#nube7").css("left")) - 1);
        $("#nube8").css("left", parseInt($("#nube8").css("left")) - 1);
        $("#nube9").css("left", parseInt($("#nube9").css("left")) - 1);

        if (parseInt($("#nube6").css("left")) <= -170 || parseInt($("#nube4").css("left")) <= -170) {
            $("#nube6").css("left", $(window).width());
            $("#nube4").css("left", $(window).width());
        }
        if (parseInt($("#nube2").css("left")) <= -280) {
            $("#nube2").css("left", $(window).width());
        }


        controlarModalMonumento(left);

    }
    

    //Si pulsa la tecla Space o la flecha arriba, salta
    if (e.keyCode == 32 || e.keyCode == 38) {
        //Para que no pueda saltar muchas veces en menos de un segundo
        if (((s + (m * 60)) - 1) >= segundosSalto) {
            segundosSalto = (m * 60) + s;

            $("#munieco").animate({
                top: "-=100" + "px",
                left: "+=30" + "px"
            }, 500, function () {
                if ($("#heart").length > 0) {
                    var munLeft = parseInt($("#munieco img").attr("width").split(/px/)[0]) + parseInt($("#munieco").css("left").split(/px/)[0]);
                    var heartLeft = parseInt($("#heart").css("left").split(/px/)[0]);
                    var heartwidth = parseInt($("#heart").attr("width").split(/px/)[0]) + heartLeft;
                    var munTop = parseInt($("#munieco").css("top").split(/px/)[0]);
                    var heartTop = parseInt($("#heart").css("top").split(/px/)[0]) + parseInt($("#heart").attr("height").split(/px/)[0]);

                    //Si se come el corazón
                    if (munLeft >= heartLeft && munLeft <= (heartwidth + 100) && munTop <= heartTop) {
                        if (vida < 5) {
                            vida++;
                            $("body").append("<audio src='./../images/heart.mp3' autoplay></audio>");

                            $("#heart").animate({
                                width: "+=20" + "px",
                                height: "+=20" + "px",
                            }, 500, function () { }).animate({
                                left: ($(window).width() * 3) / 4,
                                top: "20",
                                width: "0" + "px",
                                height: "0" + "px",
                            }, 500, function () {
                                $("#heart").addClass("d-none");
                                $("#heart").css("height", '');
                                $("#heart").css("width", '');
                                var first = $("#vidas").children().first();
                                for (let i = 1; i <= 5; i++) {
                                    if (first.hasClass("far")) {
                                        first.removeClass("far").addClass("fas");
                                        first.animate({
                                            fontSize: "+=5" + "px",
                                        }, 200, function () { }).animate({
                                            fontSize: "-=5" + "px",
                                        }, 200);
                                        break;
                                    } else {
                                        first = $("#vidas").children().eq(i);
                                    }
                                }
                            });
                        } else {
                            $("#vidas").animate({
                                fontSize: "+=5" + "px",
                            }, 200, function () { }).animate({
                                left: "+=10" + "px",
                            }, 100).animate({
                                left: "-=20" + "px",
                            }, 100).animate({
                                left: "+=20" + "px",
                            }, 100).animate({
                                left: "-=10" + "px",
                            }, 100).animate({
                                fontSize: "-=5" + "px",
                            }, 200);
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
}
//Para que salte el modal
function controlarModalMonumento(leftMunieco) {
    if (parseInt($("#munieco").css("left").split(/px/)[0]) >= parseInt($("#monumento").css("left").split(/px/)[0])) {
        if (modalShown == false) {
            modalShown = true;
            $(document).off("keydown");
            $("#modal").modal("show");
            $("#botonPregunta").attr("disabled", true);
            crearArbolPreguntas();
        }
    }
    finalPantalla(leftMunieco);
}

//Si ha llegado hasta el final de la provincia
function finalPantalla(leftMunieco) {
    //Si el muñeco ha llegado hasta el final de la pantalla 
    if (window.innerWidth <= leftMunieco + parseInt($("#munieco").css("width").split(/px/)[0])) {
        //Enviar los datos al servidor en el caso de la última provincia
        if (provincia == 8) {
            var sBD = s, mBD = m;
            if (s < 9) {
                sBD = "0" + s;
            }
            if (m < 9) {
                mBD = "0" + m;
            }
            var datos = {
                mote: sessionStorage.getItem("mote"),
                vida: vida,
                puntos: puntos,
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

        modalShown = false;
        //Cambio de provincia:: Empezar el muñeco desde el inicio de la pantalla
        $("#munieco").css("left", "0px");
        provincia++;
        //Petición al servidor para recoger los datos de la provincia actual y cambiar el entorno con los datos recibidos
        $.ajax({
            data: { 'id': provincia },
            url: "./../index.php?controller=provincia&action=dameProvincia",
            type: "get",
            success: function (response) {
                var provincia = JSON.parse(response);
                $("body").css("background", "linear-gradient(rgba(255, 255, 255, 0.267), rgba(255, 255, 255, .5)) , url(./../images/monumentos/" + provincia[0].fondo + ")");
                $("#monumento").attr("src", "./../images/monumentos/" + provincia[0].imagen);
            }
        });


        //sitios que aparece el corazón y la nieve
        if (provincia == 2 || provincia == 4 || provincia == 6) {
            $("#heart").removeClass("d-none");
            $("#heart").css("top", "300px");
            if (provincia == 4) {
                $("#heart").css("left", "1000px");
            } else if (provincia == 6) {
                $("#heart").css("left", "250px");
            }
        } else {
            $("#heart").addClass("d-none");
        }
        //Nieva si es granada
        if (provincia == 3) {
            $(function () {
                nieve = $(document).snow({ SnowImage: "./snow/snow.gif" });
            });
        } else {
            hidesnow();
        }

    }
}

// Eddy función comprobar respuesta correcta e incorrecta,
// sumar puntos si es correcta y poner la respuesta en verde y añadir un div con una breve descripción del monumento
// quitar corazón si es incorrecta y poner la respuesta en rojo

// no dejar que cierre el modal hasta que no responda
function controlarPreguntas() {
    $(this).parent().children().attr("disabled", true);
    var texto = $(this).next().text();

    if (texto == objPreguntas[0].respuestaCorrecta) {
        puntos+=100;
        $("#puntos").text(puntos);
        $(this).attr("disabled", false);

        // Selecciono el radio y de ahí le digo que la siguiente etiqueta (label) cambie el color
        $(this).next().removeClass("btn-outline-info").addClass("btn-outline-success");

        //desbloquear el boton cerrar modal
        $("#botonPregunta").attr("disabled", false);

        var divPrincipal = $("<div>", {
            "class": "col text-center py-4", "id": "descripcion"
        }).append($("<p>", {
            "text": objPreguntas[0].descripcion
        }));
        $(" #modal .modal-body").append(divPrincipal);


    } else {
        //Si ha fallado
        $(this).attr("disabled", false);
        $(this).next().removeClass("btn-outline-info").addClass("btn-outline-danger");

        $("#botonPregunta").attr("disabled", false);

        // Aparece la respuesta correcta también y la descripción
        // $("#modal label[text=]")
        $("#modal label").each(function (i) {
            var respuesta = $(this).text();
            if (respuesta == objPreguntas[0].respuestaCorrecta) {

                $(this).removeClass("btn-outline-info").addClass("bg-success");

                var divPrincipal = $("<div>", {
                    "class": "col text-center py-4", "id": "descripcion"
                }).append($("<p>", {
                    "text": objPreguntas[0].descripcion
                }));
                $(" #modal .modal-body").append(divPrincipal);
            }

        });

        //Quitamos una vida
        var last = $("#vidas").children().last();
        for (let i = 3; i >= -1; i--) {
            if (last.hasClass("fas")) {
                //Caida de piedra cuando falla
                $("#piedra").delay(600).fadeIn();
                $("#piedra").css("left", parseInt($("#munieco").css("left").split(/px/)[0]) + 40)
                $("#piedra").animate({
                    top: "+=520" + "px"
                }, 500, function () {
                    $("#impacto").fadeIn();
                    $("body").append("<audio src='./../images/piedra.mp3' autoplay></audio>")
                    $("#impacto").css("left", $("#piedra").css("left"));
                    $("#impacto").delay(1000).fadeOut();
                    last.removeClass("fas").addClass("far");
                    vida--;
                    //Si ha perdido toda la vida
                    if (vida == 0) {
                        $("#modalGameOver").modal("show");
                        $(document).off("keydown");
                        //Para repetir el juego en el caso de que hayamos perdido
                        $("#botonSi").click(function () {
                            window.location.replace("./provincia.html");
                        });
                        $("#botonNo").click(function () {
                            window.location.replace("./../index.php?action=entrarPartida");
                        });
                    }
                });
                $("#piedra").fadeOut(2000);
                $("#piedra").css("top", 0);
                break;
            } else {
                last = last.parent().children().eq(i);
            }

        }

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

            objPreguntas = JSON.parse(response);
            $("#modal img").attr("src", "./../images/monumentos/" + objPreguntas[0].img);

            $("#modal .modal-title").text(objPreguntas[0].pregunta);

            var labels = [...$("#modal label")];
            var posicionCorrecta = Math.floor(Math.random() * 3);
            var contResp = 1;

            for (let i = 0; i < labels.length; i++) {
                if (i == posicionCorrecta) {
                    $("#modal #danger-outlined-" + (i + 1)).next().text(objPreguntas[0].respuestaCorrecta);
                } else {
                    $("#modal #danger-outlined-" + (i + 1)).next().text(objPreguntas[0]["respuesta" + contResp]);
                    contResp++;
                }
            }

        }
    });
}