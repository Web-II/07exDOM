import Uitgave from './Uitgave.js';
import UitgavenRepository from './UitgavenRepository.js';

// Testcode Deel 1
console.log('TESTCODE DEEL 1');
console.log('***************');
const uitgave1 = new Uitgave(
  1,
  new Date(2018, 2, 2),
  25,
  'Fnac Veldstraat',
  'andere'
);
const uitgave2 = new Uitgave(2, new Date(2018, 2, 2), 560, 'Huur', 'woning');
console.log(uitgave1);
console.log(uitgave2);

// Testcode Deel 2
console.log('');
console.log('TESTCODE DEEL 2');
console.log('***************');
const uitgavenRepository = new UitgavenRepository();
console.log(uitgavenRepository.uitgaven);
console.log(uitgavenRepository.geefCategorieen());
console.log(uitgavenRepository.totaalBedragUitgaven());
console.log(uitgavenRepository.uitgavenPerCategorie('andere'));
