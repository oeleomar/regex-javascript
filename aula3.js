/* 
  QUANTIFICADORES
  - Sempre colocados a direita da letra
  * (opcional) 0 ou n
  + (obrigatório) 1 ou n
  ? (opcional) 0 ou 1
  \ Caractere de escape (Quando o caractere já significa algo e você quer retirar)
  {n(Quantas), m(Máximo)} Quantificados quando eu preciso de exatidão
  Utilizado para filtrar algo mais incomum, como a repetição de uma letra.
*/
const data = 'Eleomar EEEEELEOMAR eleomarrrrr';
const regex1 = /eleomar/gi; //Pega somente o eleomar
const regex2 = /e+leomar/gi; //Pega o primeiro caso e o segundo;
const regex3 = /e+leomar+/gi; //Pega todos os casos;

console.log(data.match(regex1));
console.log(data.match(regex2));
console.log(data.match(regex3));

const data2 = 
