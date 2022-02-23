<?php
function dameProvincia(){
    include_once "./models/provinciaModel.php";
    $provincia = getProvincia($_GET["id"]);
    echo json_encode($provincia);
}

