function Formula(p, a) {
return IMC = p / (a * a);
}

function Condicao(imc) {
    if (imc <= 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else {
        return 'Obeso';
    }
}

function CalculadoraIMC (Peso, Altura, Nome, IMC, Diag){
Peso = parseFloat(prompt('Digite seu peso: '));
Altura = parseFloat(prompt('Digite sua altura: '));
Nome = prompt('Digite seu nome: ');
IMC = Formula(Peso, Altura);
Diag = ``;
condicao = Condicao(IMC)
diagnostico = `Nome: ${Nome} - Peso: ${Peso} Kg - Altura: ${Altura} m - IMC: ${IMC} - Diagnóstico: ${condicao}`
return console.log(diagnostico)
}

CalculadoraIMC()

console.log("\n Alunos: Sales e Mary das Quintas")
