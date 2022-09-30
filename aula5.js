const { lookahead } = require('./base');

console.log(lookahead);

//console.log(lookahead.match(/.+[^in]active$/gim)); //Qualquer coisa que termina com active ignorando o in no começo

//Positive Lookahead
// (?=)
//Ex: /.+(?=[^in]active$)/gim)
//Frase completa sem o que tem no filtro
console.log(lookahead.match(/.+(?=[^in]active$)/gim));

//Negative Lookahead
//(?!)

//Positive Lookbehind
//(?<=)

//Negative Lookbehind
//(?<!)
