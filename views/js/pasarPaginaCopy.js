//Se establecen los segundos y mintos a cero para el Cronómetro y
// la provincia a uno y el modal a false que no se ha mostrado aún
var s = 0;
var m = 0;
var provincia = 1;
var modalShown = false;

$(document).ready(function () {
    //Registro de evento al presionar la tecla flecha para mover a la derecha
    $(document).on("keydown", mover);

    $("#modalMunieco").modal("show");
    $("#modalMuniecoEvento").click(function () {
        var muniecoSeleccionado = [...$(this).parent().parent().find(".modal-body").children()].filter((m) => m.checked == true);
        $("#div img").attr("src", $("#" + muniecoSeleccionado[0].id).next().children()[0].src);

        //Empieza con un sonido del animal
        if($("#div img").attr("src").split(/images/)[1].match(/^\/Dog2/)){
            $("body").append("<audio src='./../images/Dog2/b15adefc3c12f758b6dc6a045362532f.wav' autoplay></audio>")
        }else if($("#div img").attr("src").split(/images/)[1].match(/^\/Bear/)){
            $("body").append("<audio src='./../images/Bear-walking/beargrowl.mp3' autoplay></audio>")
        }else if($("#div img").attr("src").split(/images/)[1].match(/^\/Cat/)){
            $("body").append("<audio src='./../images/Cat/83c36d806dc92327b9e7049a565c6bff.wav' autoplay></audio>")
        }else{
            $("body").append("<audio src='./../images/Crab/83a9787d4cb6f3b7632b4ddfebf74367.wav' autoplay></audio>")

        }
       
    })


    //Si se cierra el modal, puede continuar moviéndose
    $(".btn , .btn-close").on("click", function () {
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
        //Movimiento del muñeco
        //Si es el oso
        switch ($("#div img").attr("src").split(/images/)[1]) {
            case "/Bear-walking/0a38a860f2e573b8dc5b09f390d30fbd.svg":
                $("#div img").attr("src", "./../images/Bear-walking/6d4d06e3f4cd0c9455b777b9a40782b6.svg");
                break;
            case "/Bear-walking/6d4d06e3f4cd0c9455b777b9a40782b6.svg":
                $("#div img").attr("src", "./../images/Bear-walking/7453709bef16e33e6f989aee14d7fc07.svg");
                break;
            case "/Bear-walking/7453709bef16e33e6f989aee14d7fc07.svg":
                $("#div img").attr("src", "./../images/Bear-walking/d2a5f124f988def1d214e6d0813a48f3.svg");
                break;
            case "/Bear-walking/d2a5f124f988def1d214e6d0813a48f3.svg":
                $("#div img").attr("src", "./../images/Bear-walking/0a38a860f2e573b8dc5b09f390d30fbd.svg");
                break;
        }

        //Si es el gato
        switch ($("#div img").attr("src").split(/images/)[1]) {
            case "/Cat/0fb9be3e8397c983338cb71dc84d0b25.svg":
                $("#div img").attr("src", "./../images/Cat/bcf454acf82e4504149f7ffe07081dbc.svg");
                break;
            case "/Cat/bcf454acf82e4504149f7ffe07081dbc.svg":
                $("#div img").attr("src", "./../images/Cat/0fb9be3e8397c983338cb71dc84d0b25.svg");
                break;
        }
        //Si es el perro
        switch ($("#div img").attr("src").split(/images/)[1]) {
            case "/Dog2/6afc06388d69f99e28d883126f9b2734.svg":
                $("#div img").attr("src", "./../images/Dog2/66b435d333f34d02d5ae49a598bcc5b3.svg");
                break;
            case "/Dog2/66b435d333f34d02d5ae49a598bcc5b3.svg":
                $("#div img").attr("src", "./../images/Dog2/4708bff29b3a295a03ac1d5e2d16ec75.svg");
                break;
            case "/Dog2/4708bff29b3a295a03ac1d5e2d16ec75.svg":
                $("#div img").attr("src", "./../images/Dog2/6afc06388d69f99e28d883126f9b2734.svg");
                break;
        }

        //Si es el cangrejo
        switch ($("#div img").attr("src").split(/images/)[1]) {
            case "/Crab/49839aa1b0feed02a3c759db5f8dee71.svg":
                $("#div img").attr("src", "./../images/Crab/f7cdd2acbc6d7559d33be8675059c79e.svg");
                break;
            case "/Crab/f7cdd2acbc6d7559d33be8675059c79e.svg":
                $("#div img").attr("src", "./../images/Crab/49839aa1b0feed02a3c759db5f8dee71.svg");
                break;
        }

        var left = parseInt($("#div").css("left")) + 10;
        $("#div").css("left", left + "px");
        if (parseInt($("#div").css("left").split(/px/)[0]) >= parseInt($("#monumento").css("left").split(/px/)[0])) {
            if (modalShown == false) {
                modalShown = true;
                $(document).off("keydown");
                $("#modal").modal("show");
                
            }
        }
    }

    //Si el muñeco ha llegado hasta el final de la pantalla 
    if (window.innerWidth <= left + parseInt($("#div").css("width").split(/px/)[0])) {
        modalShown = false;
        //Empezar el muñeco desde el inicio de la pantalla
        $("#div").css("left", "0px");

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
        if (provincia == 4) {
            var sBD = s, mBD = m;
            if (s < 9) {
                sBD = "0" + s;
            }
            if (m < 9) {
                mBD = "0" + m;
            }
            var datos = {
                vida: sessionStorage.getItem("vida"),
                puntos: sessionStorage.getItem("puntos"),
                tiempo: "00:" + mBD + ":" + sBD,
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

