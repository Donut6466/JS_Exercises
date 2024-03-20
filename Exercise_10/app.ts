/* AS ATIVIDADES DEVEM SER FEITAS USANDO TYPESCRIPT !!! */

/*
01 - Exiba a string 'Grandes poderes trazem grandes responsabilidades.' no console do browser.

Utilize os espaços entre os comentários abaixo para executar os códigos dos exercícios. Inclusive este.
*/
console.log("Grandes poderes trazem grandes responsabilidades.")


/*
02 - Comente o console.log acima, e:

- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.
*/

const tom: string = "Tom"
const firstTom: string = "Hanks"
const secondTom: string = "Cruise"

// Usando concatenação comum ES5
// const myFavoriteTom = "Meu Tom favorito é o " + tom + " " + secondTom + "."

// Usando template strings com ES6
const myFavoriteTom: string = `Meu Tom favorito é o ${tom} ${secondTom}.`
console.log(myFavoriteTom)

/*
03 - Comente o console.log acima, e:

- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/

const programmingLanguage: string = "JavaScript"
const js: string = programmingLanguage[0] + programmingLanguage[4]
console.log(js)

/*
04 - Comente o console.log acima, e,

- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/

const mozilla: string = 'Mozilla Developer Network'
const mdn: string = mozilla[0] + mozilla[8] + mozilla[18]
console.log(mdn)

/*
05 - Comente o console.log acima, e,

- Exiba no console do browser a quantidade de caracteres que a constante "programmingLanguage" possui;
*/

const sizeConst: string = `O tamanho da constante "${programmingLanguage}" é de: ${programmingLanguage.length} caracteres.`
console.log(sizeConst)


/*
06 - Comente o console.log acima, e,

- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena, mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/

let randomWord: string = 'Araponga'
console.log(`A última letra da string: ${randomWord} é a letra: ${randomWord[randomWord.length - 1]}`)

/*
07 - Comente o console.log acima, e,

- Exiba, no console, a string que "summerMessage" (abaixo) armazena, mas com todas as letras minúsculas;
- Não modifique a string da "summerMessage";
- Não digite a nova string manualmente.
*/

const summerMessage: string = 'O VERÃO CHEGA NESTE FIM DE SEMANA'
console.log(summerMessage.toLowerCase())

/*
08 - Comente o console.log acima, e,

- Exiba, no console, a string que "winterMessage" (abaixo) armazena, mas com todas as letras maiúsculas;
- Não modifique a string da "winterMessage";
- Não digite a nova string manualmente.
*/

const winterMessage: string = 'o inverno está chegando'
console.log(winterMessage.toUpperCase())

/*
09 - Comente o console.log acima, e,

- Exiba, no console, o index do caractere "v" da "winterMessage";
*/
console.log(`O índice do caractere "v" na string ${winterMessage} é o índice: ${winterMessage.indexOf('v')}.`)

/*
10 - Comente o console.log acima, e,

- Exiba, no console, o index da última ocorrência do caractere "n" da "winterMessage".
*/
console.log(`O índice do último char "n" na string ${winterMessage} é: ${winterMessage.lastIndexOf('n')}.`)

/*
11 - Comente o console.log acima, e,

- Após a const "harryPotterAuthor" (abaixo), exiba no console a parte "J.K." da string "harryPotterAuthor";
- Não digite a string "J.K." manualmente;
*/

const harryPotterAuthor: string = 'J.K. Rowling'

console.log(harryPotterAuthor.slice(0, 4))

/*
12 - Comente o console.log acima, e,

- Após a const "bestMovie" (abaixo), declare uma constante "realBestMovie";
- Atribua à "realBestMovie" a mesma string da "bestMovie", mas substituindo o nome do filme para "Moonlight";
- Exiba a "realBestMovie" no console.
*/

const bestMovie: string = 'E o Oscar de melhor filme vai para: "La la land"!'
console.log(bestMovie)
let realBestMovie: string = bestMovie.slice(0, -13) + " Moonlight."
console.log(realBestMovie)

/*
13 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene o resto de 10 dividido por 3 em uma constante "reminder";
- Exiba a reminder no console. O resultado deve ser 1;
*/

let reminder: number = 10 % 3
console.log(reminder)

/*
14 - Comente o console.log acima, e,

- Abaixo deste comentário, armazene a string 'O nº de episódios é: NUMERO_DE_EPISÓDIOS' em uma constante "allEpisodes";
- Insira a let "episodes" no lugar de "NUMERO_DE_EPISÓDIOS";
- Exiba a "allEpisodes" no console.
*/

let allEpisodes: string = 'O nº de episódios é: NUMERO_DE_EPISÓDIOS'
let episodes: number = 69
allEpisodes = allEpisodes.replace("NUMERO_DE_EPISÓDIOS", episodes.toString())
console.log(allEpisodes)

/*
15 - Comente o console.log acima, e,

- Descomente a const "bookMessage" e o console.log abaixo;
- Encontre uma forma de incluir as aspas simples do nome do livro na string;
- Não modifique nenhuma aspas da string para aspas duplas.
- Não use template strings.
*/

const bookMessage: string = '\'O Conto da Aia\' é um dos livros mais vendidos da década.'
console.log(bookMessage)

/*
16 - Comente o console.log acima (e a const bookMessage caso não tenha descoberto a resolução), e,

- Após a const "name" (abaixo), declare uma let "newName";
- A let "newName" deverá armazenar uma string ES5 com o mesmo valor que "name" armazena;
- Só que com as letras iniciais do nome e sobrenome maiúsculas;
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/

const nome: string = 'walter white'
let newName = nome[0].toUpperCase() + nome.slice(1, 6) + ' ' + nome[7].toUpperCase() + nome.slice(8, 12)
console.log(newName)

/*
17 - Comente o console.log acima, e,

- Atribua à "newName" uma template string;
- A template string deverá resultar no mesmo valor que a "newName" tinha anteriormente (nome e sobrenome com letras iniciais maiúsculas);
- Não digite a nova string manualmente.
- Não modifique a string da const "name";
- Exiba a "newName" no console;
*/
console.log(`${nome[0].toUpperCase()}${nome.slice(1, 6)} ${nome[7].toUpperCase()}${nome.slice(8, 12)}`)

/* 
  18 

  - Armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas;
  - Se você não assiste séries, armazene seus 3 filmes favoritos;
  - Armazene em uma constante "sentence" a frase abaixo, modificando "SÉRIE_01,  
    SÉRIE_02 e SÉRIE_03" para as suas séries favoritas;
  - O "e" antes do nome da última série deve ser mantido;
  - Forme essa frase sem digitar o nome das séries (claro) e sem utilizar  
    a notação "array[index]";
  - Exiba a frase no console.

  "Minhas 3 séries favoritas são: SÉRIE_01, SÉRIE_02 e SÉRIE_03."
*/

const my3FavoriteTVShows: string[] = ['The Walking Dead', 'LOST', 'Prison Break']
let sentence = `Minhas 3 séries favoritas são: ${my3FavoriteTVShows.join(", ")
    .replace(", P", " e P")}.`
console.log(sentence)


/*
  19 - Comente o console.log() acima e:

  - Após a constante abaixo, armazene em uma constante "isRandomTVShowIncluded"  
    um boolean que indica se a série que a "randomTVShow" armazena é uma das  
    suas 3 séries favoritas;
  - Utilize o método adequado para fazer essa verificação;
  - Exiba no console o boolean que a "isRandomTVShowIncluded" recebeu.
*/

const randomTVShow: string = 'Watchmen'
const isRandomTVShowIncluded: boolean = my3FavoriteTVShows.includes(randomTVShow)
console.log(isRandomTVShowIncluded)

/*
  20 - Comente o console.log() acima e:

  - Armazene a frase abaixo em uma constante "typeSentence", substituindo  
    "TIPO_DE_DADO" pela informação correta;
  - Utilize o operador adequado para gerar essa informação;
  - Exiba a "typeSentence" no console.

  "O tipo de dado que a const "isRandomTVShowIncluded" armazena é: TIPO_DE_DADO."
*/

const typeSentence: string = `O tipo de dado que a const "isRandomTVShowIncluded" armazena é: ${typeof (isRandomTVShowIncluded)}.`
console.log(typeSentence)

/* 
  21 - Comente o console.log() acima e:

  - Exiba a frase abaixo no console, substituindo "NÚMERO_DE_CARACTERES" por 39  
    e "BOOLEAN" pela informação correta (true ou false);
  - Converta explicitamente este boolean em uma string ao inserí-lo na frase;
  - A 1ª letra do boolean deve ser maiúscula;
  - Dica: se você perceber que está repetindo o mesmo número na string, cogite  
    armazenar este número em uma constante e usá-la na frase.

  "A string que a "typeSentence" armazena tem mais de NÚMERO_DE_CARACTERES  
  caracteres? BOOLEAN."
*/
let numChar: number = 39
console.log(`A string que a "typeSentence" armazena tem mais de ${numChar} caracteres? ${typeSentence.length > numChar}.`)

/*
  22 - Comente o console.log() acima e:

  - Após a constante "falsyValues", exiba no console a frase abaixo,  
    substituindo "NÚMERO_DE_ITENS" e "BOOLEAN" pelas informações corretas.

  "Todos os NÚMERO_DE_ITENS itens do array "falsyValues" são falsy. Inclusive o  
  BOOLEAN."
*/

const falsyValues: (number | string | boolean | null | undefined )[] = [0, "", false, '', ``, null, undefined, NaN]
console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${falsyValues[5]}.`)


//console.log(`Todos os ${falsyValues.length} itens do array "falsyValues" são falsy. Inclusive o ${isFalsy}.`)

/*
  23 - Comente o console.log() acima e:

  - Armazene em uma constante "crazyOperation" a soma entre null e 1;
  - Armazene em uma constante "crazyConversion" a conversão da "crazyOperation"  
    em boolean.
  - Você sabe por que essa conversão resultou em true?
*/

const crazyOperation: number | null = 0 + 1
const crazyConversion: boolean = Boolean(crazyOperation)
console.log(crazyConversion)

/*
  24 - Comente o console.log() acima e:

  - Armazene em uma constante "ages" um array com os números 31, 82, 61 e 11;
  - Armazene em uma constante "agesSum" a soma entre 1º e 3º itens do array  
    "ages";
  - Exiba a frase abaixo no console, substituindo "BOOLEAN" pela informação  
    correta.

  "A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação  
  é: BOOLEAN."
*/
const ages: number[] = [31, 82, 61, 11]
const agesSum: number = ages[0] + ages[2]

console.log(`A soma entre o 1º e o 3º item de "ages" é menor ou igual a 92. Essa afirmação é: ${agesSum >= 92}.`)



/*
  25 - Comente o console.log() acima e:

  - Abaixo da constante "evenNumbers", exiba no console um boolean que indica se  
    o número 8 existe no array;
  - Não utilize o método includes desta vez.
*/

const evenNumbers: number[] = [0, 2, 4, 6, 8, 10]

let contains8Number: boolean = false
for (let i = 0; i < evenNumbers.length; i++) {
    if (evenNumbers[i] === 8) {
        contains8Number = true
    }
}
console.log(`O resultado se existe 8 no vetor é: ${contains8Number}.`)


/*
  26 - Comente o loop acima e:

  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/

const cities: string[] = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities: string[] = []

for (let i = 0; i < cities.length; i++) {
    upperCaseCities.push(cities[i].toUpperCase())
}

for (let i = 0; i < cities.length; i++) {
    console.log(upperCaseCities[i])
}

/* 
  27 - Comente o console.log acima e:

  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/

const names: string[] = ['João Grilo', 'Chicó', 'Rosinha']
for (let i = 0; i < names.length; i++) {
    console.log(`<li>${names[i]}</li>`)
}

/*
  28 - Comente o console.log acima e:

  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/

const numbers: string[] = ['91', '5', '30', '97', '83', '31']
let sumNumbers: number = 0
for (let i = 0; i < numbers.length; i++) {
    sumNumbers += Number(numbers[i])
}
console.log(sumNumbers == 337)

/*
  29 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/

const arrays: number[][] = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
];

let somNumbers: number = 0;
for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
        somNumbers = somNumbers + arrays[i][j];
    }
}

console.log(somNumbers);
