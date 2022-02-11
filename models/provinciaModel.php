<?php

function getConnection()
{
   $user = 'root';
   $password = 'root';
   $dbname = 'JuegoMonumentos';
   return new PDO('mysql:host=localhost;dbname=' . $dbname, $user, $password);
}


function getProvincia($id){
    try {
        $conexion = getConnection();
        $sql = $conexion->prepare("SELECT * FROM provincias where id= :id");
        $sql->bindParam(":id", $id);
        $sql->execute();
  
        $filas = [];
        while ($fila = $sql->fetch(PDO::FETCH_ASSOC)) {
           $filas[] = $fila;
        }
     } catch (PDOException $e) {
        echo $e;
     }
     $conexion = null;
     return $filas;
}
