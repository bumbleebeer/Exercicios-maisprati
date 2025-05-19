// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let informaNumero = Number(prompt('Informe o número que deseja calcular o fatorial: '))
let fatorial = 1 

for(i = informaNumero; i > 1; i--){
    fatorial *= i
} console.log(`O Fatorial de ${informaNumero} é: ${fatorial}`)