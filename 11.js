// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()

valorSoma = 0

for(i = 0; i < 5; i++){
    let soma = Number(prompt('Insira um número: '))
    valorSoma += soma
}   
console.log(`A soma total é: ${valorSoma}`)
