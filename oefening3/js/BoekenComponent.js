import BoekenRepository from './BoekenRepository.js';

export default class BoekenComponent {
  #boekenRepository;
  #gelezenBoeken;
  #actievePagina;
  #storage;
  #aantalBoekenPerPagina;

  constructor() {
    this.#boekenRepository = new BoekenRepository();
    this.#gelezenBoeken = new Set(); // bevat de id's van gelezen boeken
    this.#actievePagina = 1; // bevat het nummer van de pagina die momenteel getoond wordt
    this.#storage = window.localStorage;
    this.#aantalBoekenPerPagina = 6;

    this.#getGelezenBoekenFromStorage();
    this.#navigatieToHtml();
    this.#boekenToHtml();
  }

  // navigatieToHtml stelt de twee event handlers voor de knoppen 'volgende' en 'vorige' in
  #navigatieToHtml() {
    const aantalPaginas = Math.ceil(
      this.#boekenRepository.boeken.length / this.#aantalBoekenPerPagina
    );

    document.getElementById('vorige').onclick = () => {
      this.#actievePagina = Math.max(1, this.#actievePagina - 1);
      this.#boekenToHtml();
    };

    document.getElementById('volgende').onclick = () => {
      this.#actievePagina = Math.min(aantalPaginas, this.#actievePagina + 1);
      this.#boekenToHtml();
    };
  }

  // boekenToHtml genereert dynamisch de boekenplank die in de div met id boeken moet komen
  #boekenToHtml() {
    const boeken = this.#boekenRepository.geefBoeken(
      (this.#actievePagina - 1) * this.#aantalBoekenPerPagina,
      this.#aantalBoekenPerPagina
    );
    const boekenDiv = document.getElementById('boeken');
    boekenDiv.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';

    // paginanummer/aantalpagina's bijwerken
    const aantalPaginas = Math.ceil(
      this.#boekenRepository.boeken.length / this.#aantalBoekenPerPagina
    );
    document.getElementById('paginanummer').textContent = `${
      this.#actievePagina
    }/${aantalPaginas}`;

    // voor elk boek (te implementeren)

    boekenDiv.appendChild(row);
  }

  #voegGelezenBoekToe(id) {
    this.#gelezenBoeken.add(id);
    this.#setGelezenBoekenInStorage();
  }

  // getGelezenBoekenFromStorage haalt de lijst met id's van gelezen boeken op uit de storage
  #getGelezenBoekenFromStorage() {}

  // setGelezenBoekenInStorage plaatst de lijst van id's van gelezen boeken in de storage
  #setGelezenBoekenInStorage() {}
}
