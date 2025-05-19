// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()


let somaDecimais = 0
let contagemNumeros = 0
let numeroDecimais;

do{
    numeroDecimais = Number(prompt('Informe um número decimal ou digite 0 para finalizar: '))

    if(numeroDecimais != 0){
        somaDecimais += numeroDecimais
        contagemNumeros++
    } 

} while(numeroDecimais != 0)

if(contagemNumeros > 0){
    let mediaDecimais = somaDecimais / contagemNumeros
    console.log(`A média aritmética dos números é: ${mediaDecimais.toFixed(2)}`)
}   else { 
    console.log('Nenhum número informado')
}



