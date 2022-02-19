$(document).ready(function() {
    $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        success: function (response) {
            var idPartida=response.split("[")[0];
            var partidas = response.split("[")[1];
            partidas = JSON.parse("["+partidas);

            for(i = 0; i < partidas.length; i ++){
                if(partidas[i][1]==idPartida) {
                    $("#mostrarPosicion").html("Enhorabuena " + partidas[i][2] + " has ganado " + partidas[i][3] + " puntos, y has quedado en el rankin el numero: " + partidas[i][0]);
                }
            }
        }
    });

})