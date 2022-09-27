/* 
Métodos de Strings

Recapitulando: 
- METODOS DE REGEX
test() -> Para verificar se existe uma regex dentro de uma variável;
exec() -> Retorna um array com as informações testada de dentro da váriável

*/

const { text } = require('./base');

// g - Com a flag "g" se eu preciso dar match ou replace em todas as ocorrencias
// g - Sem a flag "g" se eu preciso dar match ou replace apenas na primeira ocorrencias
const regex = /eleomar/gi;

//Retorna um array com todas as ocorrências do regex.
console.log(text.match(regex));
// Saída: [ 'para criar o seu conteúdo eleomar' ]

//Replace
//console.log(text.replace(regex, 'dorneles'));

//Com grupos
//console.log(text.replace(/(eleomar|dorneles)/gi, '"$1"')); //Estou desejando que todos eleomar ou maria sejam mantidos, porém é adicionado ""

console.log(
  text.replace(/(eleomar|dorneles)/gi, function (input) {
    //Quando eu quero executar algo mais complexo.
    return input.toUpperCase(); // Passando para caixa alta.
  }),
); //Estou desejando que todos eleomar ou maria sejam mantidos, porém é adicionado ""
