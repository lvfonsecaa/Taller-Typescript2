import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioDiv = document.getElementById('promedio');
renderSeriesInTable(series);
promedioDiv.innerHTML = "Promedio de temporadas: ".concat(calcularPromedioTemporadas(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.nombre, "</td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioTemporadas(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons += serie.temporadas; });
    return totalSeasons / series.length;
}
