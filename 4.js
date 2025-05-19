// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log("1 - Sedan \n2 - Suv \n3 - hatch")

let opcao = Number(prompt("Escolha a Categoria de Locação "))

switch(opcao) {
    case 1: console.log("Verificando disponibilidades de Sedans na sua localilzação");
        break;
    case 2: console.log("Verificando disponibilidades de Suvs na sua localilzação");
        break
    case 3: console.log("Verificando disponibilidades de Hatchs na sua localilzação");
        break
   default: console("Opção Inválida ou Não Disponível")
}
