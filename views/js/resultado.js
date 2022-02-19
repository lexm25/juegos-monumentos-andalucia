$(document).ready(function() {
    $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        data: {'idPartida': sessionStorage.getItem('idProvincia')},
        success: function (response) {
            response = JSON.parse(response);
            for(i = 0; i < response.length; i ++){
                if(response[i][1]==response[0][0]) {
                    $("#mostrarPosicion").html("Enhorabuena " + response[i][2] + " has ganado " + response[i][3] + " puntos, y has quedado en el rankin el numero: " + response[i][0]);
                }
            }
        }
    });

})