<?php

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
        $idPartida = setPartida(seguro($_POST["nombre"]));
        header("Location: ./index.php?controller=partidas&action=iniciar");
        
    } else {
        include_once "./views/registro.php";
    }
}

function iniciar(){
    include_once "./views/provincia1.php";
}
