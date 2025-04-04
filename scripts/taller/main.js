import { series } from '../data.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.nombre, "</td>\n                            <td>").concat(serie.canal, "</td>\n                            <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
