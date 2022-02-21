<?php

function getConnection()
{
   $user = 'developer';
   $password = 'developer';
   $dbname = 'juegomonumentos';
   return new PDO('mysql:host=localhost;dbname=' . $dbname, $user, $password);
}

function getPartidas()
{
   $con = getConnection();
   $result = $con->query('SELECT * FROM partidas ORDER BY tiempo ASC , puntos DESC, vida DESC limit 6');
   $filas = [];
   while ($fila = $result->fetch()) {
      $filas[] = $fila;
   }
   $con = null;
   return $filas;
}

function getTodasPartidasNumeradas()
{
   $con = getConnection();
   $result = $con->query('SELECT @rownum:=@rownum+1 AS rownum, partidas.* FROM (SELECT @rownum:=0) r, partidas ORDER BY `tiempo` ASC , `puntos` DESC, vida DESC;');
   $filas = [];
   while ($fila = $result->fetch()) {
      $filas[] = $fila;
   }
   $con = null;
   return $filas;
}



function setPartida($mote, $puntos, $vida, $tiempo)
{
   try {
      $con = getConnection();
      $sql = $con->prepare("INSERT into partidas values(null,:mote,:puntos,:vida,:tiempo)");
      $sql->bindParam(":mote", $mote);
      $sql->bindParam(":puntos", $puntos);
      $sql->bindParam(":vida", $vida);
      $sql->bindParam(":tiempo", $tiempo);
      $sql->execute();
      $id = $con->lastInsertId();
   } catch (PDOException $e) {
      echo $e;
   }
   $con = null;
   session_start();
   $_SESSION["idPartida"] = $id;
   return $id;
}
