# Regex em Javascript

Curso de Regex em Javascript.

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions">Documentação</a>
<a href="https://regex101.com/">Site Util Regex 101</a>
<br>

## Receitas

Encontra todas as palavras: /([\wÀ-ú]+)/gm

### Flags:

- [/ { } /] - Início e final da regex
  - Ex: [/Eleomar/gi] - Regex com flags
- g - Global (Encontra todas as ocorencias)
- i - Insensitive (Retira o case sensitive)
- () - Grupo
- | - Operador lógico OU
- ()()() 1 2 3 com $ antes - Grupos e suas variáveis, util quando se tem vários grupos, sendo a variável referente ao número do grupo
- (1(2))(3)(4) com $ antes - Com grupos dentro de grupos segue essa sequência.
- \+ - Quantificados de 1 ou n (Precede o caractere)
- ? - Quantificador de 0 ou 1 (Precede o caractere)
- \* - Quantificador de 0 ou n (Precede o caractere)
- \ - Caractere de escape (Antecede o caractere)
- { n(Quantas), m(Máximo) } - Quantificados quando eu preciso de exatidão
- . - Corresponde a qualquer caractere
- \[] - Conjunto
- \[-] - Definir um range, Ex: \[a-z]
- \[^] - Negação dentro do conjunto
- ^ - Começa com (Fora do conjunto)
- $ - Termina com
- m - Multiline vai linha por linha Ex: /[0-9]/gm
- .\* - Contém tudo, dot all

Shortcuts:

- \w - Conjunto que engloba todos = [a-zA-Z0-9]
- \W - Conjunto que excliu tudo = [^a-za-z0-9]
- \d - Conjunto que conta de 0 - 9 = [0-9]
- \D - Conjunto que exclui de 0-9 = [^0-9]
- \s - Conjunto que pega os espaços em branco da string
- \S - Conjunto que pega tudo menos os espaços em branco

Dicas:

- Tabela Unicode para ranges de letras acentuádas.
- Arquivos que percorre linha por linha utiliza-se a flag multiline

### Métodos

#### Métodos de Regex

test() -- Para verificar se existe uma regex dentro de uma variável;
exec() -- Retorna um array com as informações testada de dentro da váriável

Exs: aula1.js

#### Métodos de String

match() -- Retorna um array com a primeira opção
replace() -- Substitui o elemento do regex pelo segundo argumento passado.

Ex: aula2.js

#### Greedy and non-greedy

Greedy - Seletores gulosos que selecionam o máximo do texto (Quantificadores)
non-greedy - Seletor que pega apenas a primeira ocorrência.

- \*? - non-greedy \*
- \+? - non-greedy \+
- \?? - non-greedy \?

#### Conjuntos e Ranges

- [] - Define um conjunto de caracteres desejados

#### Retrovisores em Match e Replace

- /(1) \1/ - Grupo convencional, coloca-se \n pra acessar o grupo desejado no match
- \$n - Acessando o grupo por um retorvisor
