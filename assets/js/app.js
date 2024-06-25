document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.querySelector("#title");
    var subtitulo = document.querySelector("#subtitle");
    var textoTitulo = titulo.textContent;
    var textoSubtitulo = subtitulo.textContent;
    var indexTitulo = 0;
    var indexSubtitulo = 0;

    titulo.textContent = "";
    subtitulo.textContent = "";
    // Mostrar el título letra por letra
    var intervaloTitulo = setInterval(function() {
        if (indexTitulo < textoTitulo.length) {
            titulo.textContent += textoTitulo[indexTitulo];
            indexTitulo++;
        } else {
            clearInterval(intervaloTitulo);
            // Iniciar la animación del subtítulo
            var intervaloSubtitulo = setInterval(function() {
                if (indexSubtitulo < textoSubtitulo.length) {
                    subtitulo.textContent += textoSubtitulo[indexSubtitulo];
                    indexSubtitulo++;
                } else {
                    clearInterval(intervaloSubtitulo);
                }
            }, 100);
        }
    }, 100);
});
