// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()

let peso = Number(prompt("Informe seu Peso em Kilos: "))
let altura = Number(prompt("Informe sua Altura em Metros: "))
let pesoaltura = peso / (altura * altura)

if (pesoaltura < 18.6){
        console.log("Baixo Peso")
} else if ((pesoaltura > 18.5) && (pesoaltura < 25)) {
        console.log("Peso Normal")
} else if ((pesoaltura >= 25) && (pesoaltura < 30)) {
        console.log("Sobrepeso")
} else {
        console.log("Obesidade")
}
