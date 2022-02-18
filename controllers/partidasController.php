<?php
function entrarPartida(){
    include_once "./views/mote.html";
}
//Guardamos los datos dela partida en la base de datos
function registrar(){
        function seguro($valor)
        {
            $valor = strip_tags($valor);
            $valor = stripslashes($valor);
            $valor = htmlspecialchars($valor);
            return $valor;
        }
        include_once "./models/partidasModel.php";
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
