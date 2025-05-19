// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let numeroFibonacci = [0, 1]

for(i = 2; i < 10; i++){
    numeroFibonacci[i] = numeroFibonacci[i - 1] + numeroFibonacci[i - 2]
} console.log(numeroFibonacci.join(" "))
