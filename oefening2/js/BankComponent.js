import Canvas from './Canvas.js';
import UitgavenRepository from './UitgavenRepository.js';

export default class BankComponent {
  #canvasCategorieen;
  #storage;
  #aantalBezoeken;
  #uitgavenRepository;
  constructor() {
    this.#canvasCategorieen = new Canvas(50);
    this.#storage = window.localStorage;
    this.#aantalBezoeken = 1;
    this.#uitgavenRepository = new UitgavenRepository();

    this.#getAantalBezoekenFromStorage();
    this.#setAantalBezoekenInStorage();
    this.#toHtml();
  }

  #toHtml() {
    this.#tekstToHtml();
    this.#canvasCategorieen.tekenen(this.#uitgavenRepository);
  }

  #tekstToHtml() {}

  #getAantalBezoekenFromStorage() {}

  #setAantalBezoekenInStorage() {}
}

Date.prototype.datumNotatie = function () {
  const dagen = [
    'Zondag',
    'Maandag',
    'Dinsdag',
    'Woensdag',
    'Donderdag',
    'Vrijdag',
    'Zaterdag',
  ];
  return `${dagen[this.getDay()]} ${this.getDate()}/${
    this.getMonth() + 1
  }/${this.getFullYear()}`;
};
