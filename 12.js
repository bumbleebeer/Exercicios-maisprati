// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let tabuada = Number(prompt('Informe o número da Tabuada: '))
let numero = 1

for(numero = 1; numero <= 10; numero++){
    console.log(`${numero} X ${tabuada} = ${numero * tabuada}`)
}