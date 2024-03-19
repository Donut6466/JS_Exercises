/*
  01

  - Utilizando  declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log => dentro da função.
*/

let numbers = (Num1, Num2) =>{
  return Num1 * Num2
}  

// console.log(numbers(2, 20))

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    ** expression** que retorne o resultado da **divisão** entre esses  
    2 números.
*/

let numbers1 = (Num1, Num2) =>{
  return Num1 / Num2
}

// console.log(numbers1(10, 5))

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log =>.

  "Esta é a Xª vez que essa string é exibida."
*/

let valor = (valor = 1) =>{
  console.log(valor)
  for (c = valor; c <= 7; c++){
    console.log(`Esta é a ${c}ª vez que essa string é exibida.`)
  }
}

// console.log(valor(1))

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log => dentro da  
    função.
*/

let millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']
Aumentar = (array) => {
  let template = []
  for (let c = 0; c < array.length-1; c++){
    template.push(array[c].toUpperCase ())
  }
  return template
}

let resultado = Aumentar(millennialWords);

// console.log(resultado);

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
*/

PositivoouNegativo = (numero) =>{
  return numero > 0
}

PouN = (numero) =>{
  let counter = 0;
  for(let c = 0; c < numero.length; c++)
    if (PositivoouNegativo(numero[c])){
      counter++
    }
return counter
}

const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

const counterpositivo = PouN(randomNumbers);

const counternegativo = randomNumbers.length - counterpositivo;

// console.log(`O array "randomNumbers" possui ${randomNumbers.length} números, sendo ${counterpositivo} positivos e ${counternegativo} negativos.`);;

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log => dentro da  
    função.
*/

retornaImpar = (array) =>{
  const impares = []
  for (let c = 0; c < array.length-1; c++){
    if (array[c] % 2 !== 0){
      impares.push(array[c])
    }
  }
  return impares
}

const getOddNumbers = [83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]
const arrayImpares = retornaImpar(getOddNumbers)
// console.log(arrayImpares)

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/
let a  = () => { return 'Plymouth' }
let b  = () => { return 'é' }
let c  = () => { return 'uma' }
let d  = () => { return 'cidade' }
let e  = () => { return 'fantasma' }
let f  = () => { return 'localizada' }
let g  = () => { return 'na' }
let h  = () => { return 'ilha' }
let i  = () => { return 'de' }
let j  = () => { return 'Montserrat,' }
let k  = () => { return 'um' }
let l  = () => { return 'território' }
let m  = () => { return 'ultramarino' }
let n  = () => { return 'do' }
let o  = () => { return 'Reino' }
let p  = () => { return 'Unido' }
let q  = () => { return 'localizado' }
let r  = () => { return 'na' }
let s  = () => { return 'cadeia' }
let t  = () => { return 'de' }
let u  = () => { return 'Ilhas' }
let w  = () => { return 'de' }
let x  = () => { return 'Sotavento' }
let y  = () => { return 'nas' }
let z  = () => { return 'Pequenas' }
let alfa  = () => { return 'Antilhas,' }
let beta  = () => { return 'Índias' }
let gamma  = () => { return 'Ocidentais.' }

const functions = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, w, x, y, z, alfa, beta, gamma]

const frase = functions.map(functions => functions ()).join(' ')
//console.log(frase)
