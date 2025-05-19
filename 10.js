// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numeroInteiro = Number(prompt("Insira um número Inteiro: "))

if (!Number.isInteger(numeroInteiro)){
        console.log("Não é um número ou não é um número inteiro")
}   else {
    for(i = 0;i < 10; i++){
        console.log(numeroInteiro)
    }
}   