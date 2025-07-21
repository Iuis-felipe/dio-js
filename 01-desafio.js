/* Faça um programa para calcular o valor de uma viagem
 * Você terá 3 variaveis, sendo elas: 
 *      1 - Preço do combustivel;
 *      2 - Gasto médio de combustível do carro por KM;
 *      3 - Distância em KM da viagem;
 * 
 * Imprima no console o valor que será gasto de combustível para realizar esta viagem
 */

var precoCombustivel = 6.22;
var kmPorLitros = 10;
var distanciaEmKm = 100;


litrosConsumidos = distanciaEmKm / kmPorLitros
total = litrosConsumidos*precoCombustivel

console.log(total.toFixed(2))
