// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let numer = Number(prompt("Insira um número Inteiro: "))
if (!Number.isInteger(numer)){
        console.log("Não é um número ou não é um número inteiro")
    } else if (numer % 2 === 0){
        console.log("O número é Par")
    } else {
        console.log("O número é Impar")
    }
