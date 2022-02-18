$(document).ready(function() {
    // $('#modalGanador').modal('show');

    $.ajax({
        // data:  parametros,
        url:   './index.php?controller=partidas&action=ranking',
        type:  'post',
        data: {'idPartida': sessionStorage.getItem('idProvincia')},
        success: function (response) {
            // response = JSON.stringify(response);
            response = JSON.parse(response);
            alert(response.rownum);
        }
    });

})