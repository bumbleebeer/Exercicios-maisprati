// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let number1 = Number(prompt('Insira um valor: '))
let number2 = Number(prompt('Insira um valor diferente do primeiro: '))

if(number1 == number2){
        console.log('Os valores são iguais')
}   else if(number1 < number2){
        console.log(`A ordem crescente dos numeros é ${number1}, ${number2}`)
}   else {
        console.log(`A ordem crescente dos numeros é ${number2}, ${number1}`)
}

