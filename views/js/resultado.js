$(document).ready(function() {
    $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        success: function (response) {
            var idPartida=response.split("[")[0];
            var partidas = response.split("[")[1];
            if(idPartida > 0){
                partidas = JSON.parse("["+partidas);

                for(i = 0; i < partidas.length; i ++){
                    if(partidas[i][1]==idPartida) {
                        $("#resultados").append("<div class='bg-success text-light text-center' id='mostrarResultado'><h3>Posición en el Ranking</h3></div>");
                        $("#mostrarResultado").append("<p class='bg-white text-dark'>Enhorabuena " + partidas[i][2] + " has ganado " + partidas[i][3] + " puntos, y has quedado en el rankin el numero: " + partidas[i][0] + "</p>");
                    }
                }
                $("#nuevaPartida").click(function() {
                    idPartida = undefined;
                });
            } else {
                $("#resultados").append("<h3 class='bg-success text-light text-center'>Inicia una partida para poder ver que tan lejos llegas en la clasificación</h3>");
            }
        }
    });

})