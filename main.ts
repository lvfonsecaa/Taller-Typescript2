    import { Serie } from './Serie.js';
    import { series } from './data.js';

    let seriesTbody: HTMLElement = document.getElementById('series')!;

    renderSeriesInTable(series);

    function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.nombre}</td>
                            <td>${serie.canal}</td>
                            <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
    }
