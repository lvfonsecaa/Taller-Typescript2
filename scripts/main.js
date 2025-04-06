import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
var detalleContainer = document.getElementById('detalles');
renderSeriesInTable(series);
promedioDiv.innerHTML = "Promedio de temporadas: ".concat(calcularPromedioTemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"#\" class=\"serie-link\" data-id=\"").concat(serie.id, "\">").concat(serie.nombre, "</a></td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    document.querySelectorAll('.serie-link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var id = Number(e.target.getAttribute('data-id'));
            var selectedSerie;
            for (var i = 0; i < series.length; i++) {
                if (series[i].id === id) {
                    selectedSerie = series[i];
                    showSerieDetail(selectedSerie);
                    break;
                }
            }
        });
    });
}
function calcularPromedioTemporadas(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.temporadas; });
    return totalSeasons / series.length;
}
function showSerieDetail(serie) {
    detalleContainer.innerHTML = "\n    <img class=\"card-img-top\" src=\"".concat(serie.imagen, "\" alt=\"").concat(serie.nombre, "\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n      <p class=\"card-text\">").concat(serie.sinopsis, "</p>\n      <a href=\"").concat(serie.link, "\" target=\"_blank\" class=\"card-link\">").concat(serie.link, "</a>\n    </div>\n  ");
}
