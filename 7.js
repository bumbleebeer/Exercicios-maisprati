// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let numeroMacas = Number(prompt('Insira a quantidade de maças compradas: '))
let valorMacas = 0

if(numeroMacas < 12){
    valorMacas = (numeroMacas * 0.30)
    console.log(`O valor total da compra deu R$ ${valorMacas.toFixed(2)}`)
}   else {
    valorMacas = (numeroMacas * 0.25)
    console.log(`O valor total da compra deu R$ ${valorMacas.toFixed(2)}`)
}