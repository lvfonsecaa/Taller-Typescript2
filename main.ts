import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioDiv: HTMLElement = document.getElementById('promedio')!;
const detalleContainer: HTMLElement = document.getElementById('detalles')!;

renderSeriesInTable(series);

promedioDiv.innerHTML = `Promedio de temporadas: ${calcularPromedioTemporadas(series)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.nombre}</a></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    seriesTbody.appendChild(trElement);
  });
  document.querySelectorAll('.serie-link').forEach(link => 
    {
      link.addEventListener('click', (e) => 
      {
        e.preventDefault();
        const id = Number((e.target as HTMLElement).getAttribute('data-id'));
        let selectedSerie: Serie;
        
        for (let i = 0; i < series.length; i++) 
        {
          if (series[i].id === id) 
          {
            selectedSerie = series[i];
            showSerieDetail(selectedSerie);
            break;
          }
        }
      });
    });
}

function calcularPromedioTemporadas(series: Serie[]): number {
  let totalSeasons = 0;
  series.forEach((serie) => totalSeasons += serie.temporadas);
  return totalSeasons / series.length;
}


function showSerieDetail(serie: Serie): void {
  detalleContainer.innerHTML = `
    <img class="card-img-top" src="${serie.imagen}" alt="${serie.nombre}">
    <div class="card-body">
      <h5 class="card-title">${serie.nombre}</h5>
      <p class="card-text">${serie.sinopsis}</p>
      <a href="${serie.link}" target="_blank" class="card-link">${serie.link}</a>
    </div>
  `;
}
