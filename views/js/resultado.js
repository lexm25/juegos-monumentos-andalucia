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
                    $("#mostrarPosicion").html("Enoraguena " + response[i][2] + " âh ganao " + response[i][3] + " puntô te âh ganao una Çigala y un hamón roça imbiçible que êttamô en criçî; la prôççima bêh puedê açêl-lo mehôh; que tû compañero êttan çacando mehorê puntuaçionê que tú. Êttâh en la poçiçión " + response[i][0] + " y todabia puedê çubîh mâh çacando mehôh puntuaçión la prôççima bêh çige hugando pa podêh çubîh en el ranking.");
                }
            }
        }
    });

})