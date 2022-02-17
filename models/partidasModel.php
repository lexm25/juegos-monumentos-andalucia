<?php

function getConnection()
{
   $user = 'root';
   $password = 'root';
   $dbname = 'JuegoMonumentos';
   return new PDO('mysql:host=localhost;dbname=' . $dbname, $user, $password);
}

function getPartidas()
{
   $con = getConnection();
   $result = $con->query('SELECT * FROM `partidas` ORDER BY `tiempo` ASC , `puntos` DESC, vida DESC limit 5');
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



function setPartida($mote){
   try {
      $con = getConnection();
      $sql = $con->prepare("INSERT into partidas values(null,:mote,0,0,'00:00:00')");
      $sql->bindParam(":mote", $mote);
      $sql->execute();
      $id = $con->lastInsertId();
  } catch (PDOException $e) {
      echo $e;
  }
  $con = null;
  return $id;
}


function updatePartida($puntos,$vida,$tiempo)
{
    $retorno = false;
    try {
        $con = getConnection();
        $id = count(getPartidas());
        $sql = $con->prepare("UPDATE partidas  set puntos=:puntos, vida=:vida, tiempo=:tiempo where id=:id;");
        $sql->bindParam(":id", $id);
        $sql->bindParam(":puntos", $puntos);
        $sql->bindParam(":vida", $vida);
        $sql->bindParam(":tiempo", $tiempo);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $retorno = true;
        }
    } catch (PDOException $e) {
        echo $e;
    }
    $con = null;
    return $retorno;
}


