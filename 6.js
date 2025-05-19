// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()

let lado1 = Number(prompt('Informe o valor do lado A: '))
let lado2 = Number(prompt('Informe o valor do lado B: '))
let lado3 = Number(prompt('Informe o valor do lado C: '))

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    if(lado1 === lado2 && lado2 === lado3){
        console.log('Triangulo Equilátero pois os 3 lados são iguais')
}   else if(lado1 === lado3 || lado2 === lado3 || lado1 === lado2){
    console.log('Triangulo Isósceles pois apenas dois lados são iguais')
}   else {
    console.log('Triangulo Escaleno, pois os 3 lados são diferentes')
}
} else{
    console.log('Os valores não formam nenhum triangulo')
}