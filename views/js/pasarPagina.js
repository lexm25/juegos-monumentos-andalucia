//Cronómetro : Se establecen los segundos y mintos a cero y si no es la primera pantalla,
// se definen con los segundos y los minutos de la pantalla anterior
var s = 0;
var m = 0;
if (sessionStorage.getItem("s") != null) {
    s = sessionStorage.getItem("s");
    m = sessionStorage.getItem("m");
}

$(document).ready(function () {
    //Registro de evento al presionar la tecla flecha para mover a la derecha
    $(document).on("keydown", mover);

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
        var left = parseInt($("#div").css("left")) + 20;
        $("#div").css("left", left + "px");
    }

    //Si el muñeco ha llegado hasta el final de la pantalla 
    if (window.innerWidth <=left + parseInt($("#div").css("width").split(/px/)[0])) {
        //Obtener el número de provincia actual
        var numProvincia = parseInt(window.location.pathname.split("/")[3].split(".")[0].split(/a/)[1]);

        //Antes de ir a otra provincia, guardamos en sesion los segundos y los minutos pasados
        sessionStorage.setItem("s", s);
        sessionStorage.setItem("m", m);

        if (numProvincia == 0) {
            //Enviar los datos al servidor en el caso de la última provincia
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
        }else{
             //Ir a la siguiente provincia
            window.location.replace("http://localhost/juegos-monumentos-andalucia/views/provincia" +(numProvincia + 1) +".php");
        }
       
    }
}
