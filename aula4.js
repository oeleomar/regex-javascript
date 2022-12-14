const { conjunto } = require('./base');

console.log(conjunto.match(/[abc]/g)); //Procurando ou A ou B ou C
// Saída [ 'a', 'b', 'c' ]

console.log(conjunto.match(/[abc123]+/g)); //Procurando 1 ou +
//Saida [ 'abc', '123' ]

console.log(conjunto.match(/[^abc123]/g)); //Procurando 1 ou +
/* 
  Saída: [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ' ', '0', '4', '5', '6', '7', '8', '9', ' ', '!',
  '@', '#', '$', '%', '&', '*', '(', ')', '_', '/',
  '*', '-', '+', '.', ','
]
*/

console.log(conjunto.match(/[a-z]/g));
console.log(conjunto.match(/[0-9]/g));
console.log(conjunto.match(/[a-zA-Z0-9]/g));
