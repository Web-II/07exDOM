'use strict';
class Boek {
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

class BoekenRepository {
  #boeken = [];
  constructor() {
    this.boekenVullen();
  }

  get boeken() {
    return this.#boeken;
  }

  voegBoekToe(id, titel, afbeelding) {
    this.#boeken.push(new Boek(id, titel, afbeelding));
  }

  // geefBoeken retourneert een deel van de boeken in een array
  // parameter 'vanafBoek' is een nummer en geeft aan vanaf het hoeveelste boek we een deel nemen (eerste boek is nummer 1)
  // parameter 'aantalBoeken' is een nummer en geeft aan hoeveel opeenvolgende boeken we in het deel stoppen
  geefBoeken(vanafBoek, aantalBoeken) {}

  boekenVullen() {
    this.voegBoekToe(1, 'Wuthering Heights', 'WutheringHeights.jpg');
    this.voegBoekToe(2, 'Gullivers Travels', 'GulliversTravels.jpg');
    this.voegBoekToe(3, 'A Bend In The River', 'ABendInTheRiver.jpg');
    this.voegBoekToe(
      4,
      'The Picture Of DorianGray',
      'ThePictureOfDorianGray.jpg'
    );
    this.voegBoekToe(5, 'A Christmas Carol', 'AChristmasCarol.jpg');
    this.voegBoekToe(6, 'Alice In Wonderland', 'AliceInWonderland.jpg');
    this.voegBoekToe(7, 'The Quie tAmerican', 'TheQuietAmerican.jpg');
    this.voegBoekToe(8, 'The Stranger', 'TheStranger.jpg');
    this.voegBoekToe(9, 'Anna Karenina', 'AnnaKarenina.jpg');
    this.voegBoekToe(10, 'On The Road', 'OnTheRoad.jpg');
    this.voegBoekToe(11, 'Anne Frank', 'AnneFrank.jpg');
    this.voegBoekToe(12, 'A Passage To India', 'APassageToIndia.jpg');
    this.voegBoekToe(13, 'Bird Song', 'BirdSong.jpg');
    this.voegBoekToe(14, 'Catch 22', 'Catch22.jpg');
    this.voegBoekToe(15, 'Don Quichote', 'DonQuichote.jpg');
    this.voegBoekToe(16, 'Frankenstein', 'Frankenstein.jpg');
    this.voegBoekToe(17, 'Hamlet', 'Hamlet.jpg');
    this.voegBoekToe(18, 'Harry Potter Series', 'HarryPotterSeries.jpg');
    this.voegBoekToe(19, 'His Dark Materials', 'HisDarkMaterials.jpg');
    this.voegBoekToe(20, 'Jane Eyre', 'JaneEyre.jpg');
    this.voegBoekToe(21, 'Life Of Pi', 'LifeOfPi.jpg');
    this.voegBoekToe(22, 'The Catcher In The Rye', 'TheCatcherInTheRye.jpg');
    this.voegBoekToe(23, 'The Color Purple', 'TheColorPurple.jpg');
    this.voegBoekToe(24, 'Lord Of The Flies', 'LordOfTheFlies.jpg');
    this.voegBoekToe(25, 'Memoirs Of A Geisha', 'MemoirsOfAGeisha.jpg');
    this.voegBoekToe(26, 'The Grapes Of Wrath', 'TheGrapesOfWrath.jpg');
    this.voegBoekToe(27, 'The Great Gatsby', 'TheGreatGatsby.jpg');
    this.voegBoekToe(28, 'Men Without Women', 'MenWithoutWomen.jpg');
    this.voegBoekToe(29, 'The Divine Comedy', 'TheDivineComedy.jpg');
    this.voegBoekToe(30, 'The Lord Of The Rings', 'TheLordOfTheRings.jpg');
    this.voegBoekToe(31, 'MobyDick', 'MobyDick.jpg');
    this.voegBoekToe(32, 'Money', 'Money.jpg');
    this.voegBoekToe(
      33,
      'Adventures Of Huckleberry Finn',
      'AdventuresOfHuckleberryFinn.jpg'
    );
    this.voegBoekToe(34, 'Nineteen Eighty Four', 'NineteenEightyFour.jpg');
    this.voegBoekToe(
      35,
      'One Flew Over The Cuckoos Nest',
      'OneFlewOverTheCuckoosNest.jpg'
    );
    this.voegBoekToe(36, 'Pride And Prejudice', 'PrideAndPrejudice.jpg');
    this.voegBoekToe(37, 'Rebecca', 'Rebecca.jpg');
    this.voegBoekToe(38, 'Robinson Crusoe', 'RobinsonCrusoe.jpg');
    this.voegBoekToe(39, 'The Bell Jar', 'TheBellJar.jpg');
    this.voegBoekToe(40, 'The Canterbury Tales', 'TheCanterburyTales.jpg');
    this.voegBoekToe(41, 'Brave New World', 'BraveNewWorld.jpg');
    this.voegBoekToe(
      42,
      'The Count Of Monte Cristo',
      'TheCountOfMonteCristo.jpg'
    );
    this.voegBoekToe(43, 'Heart Of Darkness', 'HeartOfDarkness.jpg');
    this.voegBoekToe(44, 'The Wind In The Willows', 'TheWindInTheWillows.jpg');
    this.voegBoekToe(45, 'To Kill A Mockingbird', 'ToKillAMockingbird.jpg');
    this.voegBoekToe(46, 'Ulysses', 'Ulysses.jpg');
    this.voegBoekToe(47, 'The War Of The Worlds', 'TheWarOfTheWorlds.jpg');
    this.voegBoekToe(48, 'The Way We Live Now', 'TheWayWeLiveNow.jpg');
  }
}

class BoekenComponent {
  #boekenRepository;
  #gelezenBoeken;
  #actievePagina;
  #storage;
  #aantalBoekenPerPagina;

  constructor(window) {
    this.#boekenRepository = new BoekenRepository();
    this.#gelezenBoeken = new Set(); // bevat de id's van gelezen boeken
    this.#actievePagina = 1; // bevat het nummer van de pagina die momenteel getoond wordt
    this.#storage = window.localStorage;
    this.#aantalBoekenPerPagina = 6;
  }
  get boekenRepository() {
    return this.#boekenRepository;
  }
  get gelezenBoeken() {
    return this.#gelezenBoeken;
  }
  get actievePagina() {
    return this.#actievePagina;
  }
  get storage() {
    return this.#storage;
  }
  get aantalBoekenPerPagina() {
    return this.#aantalBoekenPerPagina;
  }

  set aantalBoekenPerPagina(value) {
    this.#aantalBoekenPerPagina = value;
  }

  // navigatieToHtml genereert de twee knoppen die in de div met id navigatie moeten komen
  navigatieToHtml() {
    const aantalPaginas =
      this.#boekenRepository.boeken.length / this.#aantalBoekenPerPagina;
    const divElement = document.getElementById('navigatie');
    let tekst, actie;
    for (let i = 0; i < 2; i++) {
      let btn = document.createElement('button');
      if (i === 0) {
        tekst = '<';
        actie = () => {
          this.#actievePagina = Math.max(1, this.#actievePagina - 1);
          this.boekenToHtml();
        };
      } else {
        tekst = '>';
        actie = () => {
          this.#actievePagina = Math.min(
            aantalPaginas,
            this.#actievePagina + 1
          );
          this.boekenToHtml();
        };
      }
      btn.appendChild(document.createTextNode(tekst));
      btn.onclick = actie;
      btn.type = 'button';
      divElement.appendChild(btn);
    }
  }

  // boekenToHtml genereert dynamsich de boekenplank die in de div met id boeken moet komen
  boekenToHtml() {
    const boeken = this.#boekenRepository.geefBoeken(
      (this.#actievePagina - 1) * this.#aantalBoekenPerPagina,
      this.#aantalBoekenPerPagina
    );
    const boekenDiv = document.getElementById('boeken');
    boekenDiv.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';
    // voor elk boek:

    boekenDiv.appendChild(row);
  }

  voegGelezenBoekToe(id) {
    this.#gelezenBoeken.add(id);
    this.setGelezenBoekenInStorage();
  }

  // getGelezenBoekenFromStorage haaltde lijst met id's van gelezen boeken op uit de storage
  getGelezenBoekenFromStorage() {}

  // setGelezenBoekenInStorage plaatst de lijst van id's van gelezen boeken in de storage
  setGelezenBoekenInStorage() {}
}

function init() {
  const boekenComponent = new BoekenComponent(window.localStorage);
  boekenComponent.getGelezenBoekenFromStorage();
  boekenComponent.navigatieToHtml();
  boekenComponent.boekenToHtml();
}

window.onload = init;
