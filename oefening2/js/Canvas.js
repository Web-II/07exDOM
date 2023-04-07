export default class Canvas {
  #canvas;
  #ctx;
  #offset;
  constructor(offset) {
    this.#canvas = window.document.getElementById("canvas");
    this.#ctx = this.#canvas.getContext("2d");
    this.#offset = offset;
  }

  tekenen(uitgavenRepo) {
    this.#canvas.width = this.#canvas.width;
    // tekenen van de assen
    this.#ctx.lineWidth = 2;
    this.#ctx.strokeStyle = "#333";
    this.#ctx.font = "italic 8pt sans-serif";

    // verticale as tekenen
    this.#ctx.moveTo(this.#offset, this.#offset);
    this.#ctx.lineTo(this.#offset, this.#canvas.height - this.#offset);
    this.#ctx.stroke();

    // horizontale as tekenen
    this.#ctx.moveTo(this.#offset, this.#canvas.height - this.#offset);
    this.#ctx.lineTo(
      this.#canvas.width - this.#offset,
      this.#canvas.height - this.#offset
    );
    this.#ctx.stroke();

    this.#ctx.fillStyle = "black";
    // labels
    for (let i = 0; i <= 100; i += 10) {
      this.#ctx.fillText(
        i,
        this.#offset - 15,
        this.#canvas.height - this.#offset - i * 3
      );
    }
    const totaleUitgaven = uitgavenRepo.totaalBedragUitgaven();

    uitgavenRepo.geefCategorieen().forEach((categorie, index, array) => {
      const uitgavePerCategorie = uitgavenRepo.uitgavenPerCategorie(categorie);
      const breedteKolom = Math.round(
        (this.#canvas.width - 2 * this.#offset - array.length * 20) /
          array.length
      );
      const percentage = Math.round(
        (uitgavePerCategorie * 100) / totaleUitgaven,
        0
      );
      this.#ctx.beginPath();
      this.#ctx.fillStyle = "red";
      this.#ctx.fillRect(
        this.#offset + 10 + (breedteKolom + 20) * index,
        this.#canvas.height - this.#offset - 3 * percentage,
        breedteKolom,
        3 * percentage
      );
      this.#ctx.closePath();
      this.#ctx.beginPath();
      this.#ctx.fillStyle = "black";
      this.#ctx.fillText(
        categorie,
        this.#offset + 10 + (breedteKolom + 20) * index,
        this.#canvas.height - this.#offset + 10
      );
      this.#ctx.closePath();
    });
  }
}
