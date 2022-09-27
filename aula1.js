const { text } = require('./base');

const regex = /para criar o seu conteúdo eleomar/gi;
console.log(regex.test(text));

//Com grupos e seletores lógicos
/*  */
const regex2 = /(para criar)( o seu conteúdo eleomar)/i; // Regex com grupos
const found = regex2.exec(text); //Retorna um array com as informações
console.log(found);
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

/*  */
const regex3 = /(para criar|selecionar)( o seu conteúdo eleomar)/; //Regex com operador lógico OU
const found = regex2.exec(text); //Retorna um array com as informações
console.log(found);
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
