<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="views/style/resultado.css">
    <link rel="icon" type="image/x-icon" href="../images/andaluciaFavicon.png">
</head>

<body>
    <nav class="bg-success">
        <ul class="nav nav-pills justify-content-center p-3">
            <li class="nav-item"> <a class="nav-link text-light" href="index.php?controller=partidas&action=entrarPartida">Nueva Partida</a> </li>
        </ul>
    </nav>
    <div class="col-12 p-4">
        
        <div class="modal" id="modalGanador" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">¡HAS TERMINADO EL JUEGO!</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Enoraguena <?php echo $partidas[0]['mote']; ?> has acabado el juego con <?php echo $partidas[0]['puntos'];?> puntos. Ahora puedes ver tu posición en el ránkin.</p>
                    </div>
                </div>
            </div>
        </div>
    
        <table class="table">
            <thead class="bg-success">
                <tr>
                    <th scope="col">Mote</th>
                    <th scope="col">Puntuación</th>
                    <th scope="col">Tiempo</th>
                    <th scope="col">Vidas</th>
                </tr>
            </thead>
            <tbody class="table-light"> <?php foreach ($partidas as $partida) : ?> <tr>
                        <td scope="col"><?php echo $partida['mote']; ?></td>
                        <td scope="col"><?php echo $partida['puntos']; ?></td>
                        <td scope="col"><?php echo $partida['tiempo']; ?></td>
                        <td scope="col"><?php echo $partida['vida']; ?></td>
                    </tr> <?php endforeach; ?> </tbody>
        </table>
    </div>
        
    <div class="col-12 p-4">
        <div class="col-12 text-center bg-success p-2" id="modalResultado">
            <h5 class="text-light">Posición en el Ranking</h5>
            <div>
                <p id="mostrarPosicion" class="text-light"></p>
            </div>
        </div>
    </div>
    <script src="./views/js/resultado.js"></script>

</body>

</html>