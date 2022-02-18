$(document).ready(function() {
    $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        data: {'idPartida': sessionStorage.getItem('idProvincia')},
        success: function (response) {
            response = JSON.stringify(response);
            response = JSON.parse(response);
            if(response.id==response.idPartida) {
                $("#mostrarPosicion").html("Enoraguena " + response.mote + " âh ganao " + response.puntos + " puntô te âh ganao una Çigala y un hamón roça imbiçible que êttamô en criçî; la prôççima bêh puedê açêl-lo mehôh; que tû compañero êttan çacando mehorê puntuaçionê que tú. Êttâh en la poçiçión " + response.rownum + " y todabia puedê çubîh mâh çacando mehôh puntuaçión la prôççima bêh çige hugando pa podêh çubîh en el ranking.");
            }
        }
    });

})