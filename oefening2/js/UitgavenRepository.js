import Uitgave from './Uitgave.js';
import { uitgaven } from './uitgavenArray.js';

export default class UitgavenRepository {
  #uitgaven = []; // array met Uitgave-objecten
  constructor() {
    this.#uitgavenOpvullen();
  }

  get uitgaven() {
    return this.#uitgaven;
  }

  #voegUitgaveToe(id, datum, bedrag, omschrijving, categorie) {}

  #uitgavenOpvullen() {
    uitgaven.forEach(([id, datum, bedrag, omschrijving, categorie]) =>
      this.#voegUitgaveToe(id, datum, bedrag, omschrijving, categorie)
    );
  }

  geefCategorieen() {}

  totaalBedragUitgaven() {}

  uitgavenPerCategorie(categorie) {}
}
