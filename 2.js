// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const prompt = require('prompt-sync')()

let idade = Number(prompt("Insira a sua idade: "))

if(idade < 13){
    console.log("Você é uma criança")
}   else if ((idade > 12) && (idade < 18 )) {
    console.log("Voce é um Adolecente")
}   else if ((idade > 17) && (idade < 60 )) {
        console.log("Voce é um Adulto")    
}   else { console.log("Voce é um Idoso")
}
