<?php
function damePregunta(){
    include_once "./models/preguntasModel.php";
    $pregunta = getPregunta($_GET["id"]);
    echo json_encode($pregunta);
}

