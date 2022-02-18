$(document).ready(function() {
    // $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        data: {'idPartida': sessionStorage.getItem('idProvincia')},
        success: function (response) {
            response = JSON.stringify(response);
            response = JSON.parse(response);
            if(response.id==response.idPartida) {
                $("#mostrarPosicion").html("Enhoragüena " + response.mote + " as ganao " + response.puntos + " puntos tas ganao una Sigala y un jamón rosa imbisible questamó en krizí; la prozima vé pueé aserlo mejó; ke tus compañeró tansakando mejoré puntuasioné ke tú. Está en la posisión " + response.rownum + " y todabia pueé zubí má zakando mejó puntuasión la prozima vé zige jugando pa podé zubí en er rankí.");
            }
        }
    });

})