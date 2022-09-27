# Regex em Javascript

Curso de Regex em Javascript.

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions">Documentação</a>
<br>

### Flags:

- [/ { } /] - Início e final da regex
  - Ex: [/Eleomar/gi] - Regex com flags
- g - Global (Encontra todas as ocorencias)
- i - Insensitive (Retira o case sensitive)
- () - Grupo
- | - Operador lógico OU
- ()()() 1 2 3 com $ antes - Grupos e suas variáveis, util quando se tem vários grupos, sendo a variável referente ao número do grupo
- (1(2))(3)(4) com $ antes - Com grupos dentro de grupos segue essa sequência.

### Métodos

#### Métodos de Regex

test() -- Para verificar se existe uma regex dentro de uma variável;
exec() -- Retorna um array com as informações testada de dentro da váriável

Exs: aula1.js

#### Métodos de String

match() -- Retorna um array com a primeira opção
replace() -- Substitui o elemento do regex pelo segundo argumento passado.

Ex: aula2.js
