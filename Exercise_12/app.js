/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

let cat = {
    name: 'Toulouse',
    age: 6,
    color: '#ff8000',
    bestFriends: ['Acsa', 'July'],
    sound: 'miau'
}

console.log(cat)

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound}".`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.age = cat.age + 2

console.log(cat.age)

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/

function adicionarAmigo() {
    cat.bestFriends.push('Fox')
}
adicionarAmigo()
console.log(cat.bestFriends)

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

function adicionarCor(){
   cat['color'] = cat['color'] + (' #ffffff')
}
adicionarCor()
console.log(cat['color'])

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

function seriaBoolean(x) {
  return (typeof x == 'object')
}

console.log(seriaBoolean(cat))

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
  name: 'Link',
  age: 10,
  color: '#ffffff',
  bestFriends: ['Pingo', 'Eu'],
  sound: 'au'
}

function somarIdades(num1, num2) {
  return (num1 + num2)
}

console.log(somarIdades(cat.age, cat.age))

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = car => {
  return Boolean(car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35')
}

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))

/*
  09
 
  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

function algumaCoisa(type) {
  null,
  undefined,
  Object;
  if (typeof type == 'null'){return 'Seta, explicitamente, uma variável sem valor.'}
  if (typeof type == 'undefined'){return 'Representa um valor não-setado'}
  if (typeof type == 'object'){return 'Arrays, Datas, Objetos literais, Funções, etc.'}
}

console.log(algumaCoisa(cat))

/*

10

- Declare uma constante que recebe o seu nome;
- Ela deve ter um escopo global.
*/

meuNome = 'Sales'

/*
  11

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/

function chamarIdade(){
  let minhaIdade = 18
  return console.log(minhaIdade)
}

chamarIdade()

// console.log(minhaIdade)

//isso aconteceu pois a variável "minhaIdade" é uma variável local, ou seja, ela é apenas válida dentro da função na qual foi declarada

/*
  12

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/

/*
  13

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

/*
  14

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/

/*
  15

  - Exiba, no console, a mensagem com as cores do carro.
*/

/*
  16

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/

/*
  17
  - Aqui vamos simular um sistema de cadastro de um médico que deseja guardar informações sobre os seus pacientes em um hospital
  - Aqui faça uma simulação de um banco de dados com informações sobre pacientes de um hospital (20 pacientes)
  - Cada paciente deve ser um objeto declarado, e armazenado em um banco de dados com array
  - Cada paciente deve possuir os seguintes atributos: nome, idade, cpf, sintoma, classificação de risco (de 0-5), situação de risco
  - Você deve verificar qual a classificação de cada paciente e atribuir a situação do paciente como 'Risco leve' caso ele tenha classificação 1 ou 2, 
        'Risco Moderado' caso ele tenha risco de 3 ou 4, e 'Grave risco' caso ele tenha risco de valor igual a 5.
  - Depois imprima um relatório completo sobre os pacientes.
*/
