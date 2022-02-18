<?php
function entrarPartida(){
    include_once "./views/index.html";
}
//La primera pantalla
function registrar(){
    if (count($_POST) > 0) {
        function seguro($valor)
        {
            $valor = strip_tags($valor);
            $valor = stripslashes($valor);
            $valor = htmlspecialchars($valor);
            return $valor;
        }
        include_once "./models/partidasModel.php";
        $idPartida = setPartida(seguro($_POST["mote"]));
        header("Location: ./index.php?controller=partidas&action=iniciar");
        
    } else {
        include_once "./views/registro.php";
    }
}

//La primera provincia
function iniciar(){
    header("Location: ./views/provinciaBorrador.html");
}

//Antes de ir a la pantalla de resultado
function actualizar(){
    include_once "./models/partidasModel.php";
    $cumplido= updatePartida(intval($_POST["puntos"]), intval($_POST["vida"]), $_POST["tiempo"]);
}

//El ranking de las partidas numeradas
function ranking(){
    include_once "./models/partidasModel.php";
    $partidasRanking= getTodasPartidasNumeradas();
    echo $_POST["idPartida"] ."". json_encode($partidasRanking);
}
//La pantalla de resultado
function resultado(){
    include_once "./models/partidasModel.php";
    $partidas = getPartidas();
    include_once "./views/resultado.php";

}

function borrarUltimaPartida(){

}


