export default class Boek {
  #id;
  #titel;
  #afbeelding;
  constructor(id, titel, afbeelding) {
    this.#id = id;
    this.#titel = titel;
    this.#afbeelding = afbeelding;
  }

  get id() {
    return this.#id;
  }
  get titel() {
    return this.#titel;
  }
  get afbeelding() {
    return this.#afbeelding;
  }
}
