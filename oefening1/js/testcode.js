import Vacature from './Vacature.js';
import VacaturesRepository from './VacatureRepository.js';

// Testcode Deel 1
console.log('TESTCODE DEEL 1');
console.log('***************');

const vacature = new Vacature(
  '1',
  'JavaScript Front-End Developer',
  'Onze missie de lancering van straffe consultants op even straffe projecten. In dat verhaal zoeken we gedreven Frontend Developers voor projecten bij klanten, lancering alsook opvolging gegarandeerd.',
  [
    'Must have kennis: html5, css3, Gulp, javascript (VanillaJS - Modulair - Unit testen), sass, Progressive enhancement, Mobile First en Brower compatibility issues.',
    'Nice to have kennis: SMACSS, BEM, ESLint, scss-lint, Thymeleaf en automatische end-to-end testen',
    'Agile mindset en ervaring met Scrum of andere agile-methodes',
    'Teamgericht - samen willen winnen',
    'Gepassioneerd door development',
  ],
  'IT4IT SERVICES',
  'Westerlo'
);
console.log(vacature);
console.log(
  `De vacature bevat één van de zoektermen [javascript, groen]: ${vacature.bevatZoekterm(
    ['javascript', 'groen']
  )}`
);
console.log(
  `De vacature bevat één van de zoektermen [werfleider, groen]: ${vacature.bevatZoekterm(
    ['werfleider', 'groen']
  )}`
);

// Testcode Deel 2
console.log('');
console.log('TESTCODE DEEL 2');
console.log('***************');
const vacatureRepository = new VacaturesRepository();
console.log(vacatureRepository.vacatures);
console.log(
  vacatureRepository.filterOpZoekTermen(['javascript', 'werfleider'])
);
console.log(
  vacatureRepository.filterOpZoekTermen(['groen', 'bomen', 'planten'])
);
