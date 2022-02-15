$(function() {
    // $('#modalGanador').modal('show');
    $.ajax({
        url:   'controllers/partidasController.php',
        type:  'post',
        beforeSend: function () {
                $("#modalResultado").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            // data = JSON.parse(response);
            // alert(data);
            // $("#mostrarPosicion").html("Enhoragüena <?php echo $partidas[0]['mote']; ?> as ganao <?php echo $partidas[0]['puntos']; ?> puntos tas ganao una Sigala y un jamón rosa imbisible questamó en krizí; la prozima vé pueé aserlo mejó; ke tus compañeró tansakando mejoré puntuasioné ke tú está en la posisión <?php echo $partidas[0]['id']; ?> y todabia pueé zubí má zakando mejó puntuasión la prozima vé ke lo intente zige jugando pa podé zubí en er rankí");
        }
    });
});