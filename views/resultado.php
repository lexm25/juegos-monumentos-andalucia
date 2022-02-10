<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>
    <nav>
    <ul class="nav nav-pills justify-content-center p-3">
        <li class="nav-item">
            <a class="nav-link text-success" href="registro.php">Nueva Partida</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active bg-success" aria-current="page" href="#">Resultado Partida</a>
        </li>
    </ul>
    </nav>
    <div class="col-12 p-4">
        <table class="table">
        <thead class="table-success">
            <tr>
                <th scope="col">Mote</th>
                <th scope="col">Puntuación</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Vidas</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($partidas as $partida): ?>
           
                <tr>
                    <td scope="col"><?php echo $partida['mote']; ?></td>
                    <td scope="col"><?php echo $partida['puntos']; ?></td>
                    <td scope="col"><?php echo $partida['tiempo']; ?></td>
                    <td scope="col"><?php echo $partida['vida']; ?></td>
                </tr>

            <?php endforeach; ?>
        </tbody>
        </table>
    </div>
</body>
</html>