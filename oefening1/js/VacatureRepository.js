import Vacature from './Vacature.js';
import { vacatures } from './vacatureArray.js';

export default class VacaturesRepository {
  #vacatures = [];
  constructor() {
    this.#vacaturesVullen();
  }

  get vacatures() {
    return this.#vacatures;
  }

  voegVacatureToe(id, titel, functieomschrijving, profiel, bedrijf, plaats) {}

  #vacaturesVullen() {
    vacatures.forEach(
      ([id, titel, functieomschrijving, profiel, bedrijf, plaats]) =>
        this.voegVacatureToe(
          id,
          titel,
          functieomschrijving,
          profiel,
          bedrijf,
          plaats
        )
    );
  }

  filterOpZoekTermen(zoektermen) {}
}
