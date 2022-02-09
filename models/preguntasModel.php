<?php

function getConnection()
{
   $user = 'root';
   $password = 'root';
   $dbname = 'preguntas';
   return new PDO('mysql:host=localhost;dbname=' . $dbname, $user, $password);
}

function getPreguntas()
{
   $con = getConnection();
   $result = $con->query('SELECT * FROM preguntas');
   $filas = [];
   while ($fila = $result->fetch()) {
      $filas[] = $fila;
   }
   $con = null;
   return $filas;
}


function getPregunta($id){
    try {
        $conexion = getConnection();
        $sql = $conexion->prepare("SELECT * FROM preguntas where id= :id");
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
