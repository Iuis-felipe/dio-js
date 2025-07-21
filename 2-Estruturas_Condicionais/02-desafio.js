// Faça um programa calcular o valor de uma viagem.

// Você terá 5 variaveis. Sendo elas:
//     1 - Preço do etanol
//     2 - Preço da gasolina
//     3 - O tipo de combustivel que esta no seu carro
//     4 - Gasto medio do combustivel do carro por KM
//     5 - Distancia em KM da viagem

// Imprima no console o valor que sera gasto para realizar esta viagem

var precoGasolina = 6.22;
var precoEtanol = 5.79;
var kmPorLitros = 10;
var distanciaEmKm = 100;
var tipoCombustivel = "Etanol"

const litrosConsumidos = distanciaEmKm / kmPorLitros

if (tipoCombustivel === "Gasolina") {
    valorGasto = litrosConsumidos * precoGasolina
} else {
    valorGasto = litrosConsumidos * precoEtanol
}

console.log(valorGasto.toFixed(2))


