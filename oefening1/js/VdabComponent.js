import VacaturesRepository from './VacatureRepository.js';

export default class VdabComponent {
  #zoektermen = [];
  #vacaturesRepository;
  #storage;
  constructor() {
    this.#vacaturesRepository = new VacaturesRepository();
    this.#storage = window.localStorage;

    this.#toHtml();
  }

  #voegZoektermToe(zoekterm) {
    this.#zoektermen.push(zoekterm);
    this.#setZoektermenInStorage();
    this.#toHtml();
  }

  #verwijderZoekterm(zoekterm) {

  }

  #getZoektermenFromStorage() {

  }

  #setZoektermenInStorage() {

  }

  #toHtml() {
    this.#zoektermenToHtml();
    this.#vacaturesToHtml();
  }

  #zoektermenToHtml() {

  }

  #vacaturesToHtml() {
    document.getElementById('resultaat').innerHTML = '';
    this.#vacaturesRepository
      .filterOpZoekTermen(this.#zoektermen)
      .forEach((vacature) => {
        const divElement = document.createElement('div');
        const h2Element = document.createElement('h2');
        h2Element.innerText = vacature.titel;
        h2Element.setAttribute('class', 'vacatureTitel');
        const h3Element = document.createElement('h3');
        h3Element.innerText = vacature.bedrijf + ' - ' + vacature.plaats;
        const h4Element1 = document.createElement('h4');
        h4Element1.innerText = 'Functieomschrijving';
        const pElement = document.createElement('p');
        pElement.innerText = vacature.functieomschrijving;
        const h4Element2 = document.createElement('h4');
        h4Element2.innerText = 'Profiel';
        const ulElement = document.createElement('ul');
        vacature.profiel.forEach((item) => {
          const liElement = document.createElement('li');
          liElement.innerText = item;
          ulElement.appendChild(liElement);
        });
        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element1);
        divElement.appendChild(pElement);
        divElement.appendChild(h4Element2);
        divElement.appendChild(ulElement);
        document.getElementById('resultaat').appendChild(divElement);
      });
  }
}
