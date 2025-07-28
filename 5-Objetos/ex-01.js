/* 
 * 1 - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
 * Crie um método que dado a quantidade de quilometros e o preço do combustível no dê o valor
 * gasto em reais para realizar este percurso.
 * 
*/

class Carro {
    marca
    cor
    gastoMedioPorKm

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel
    }

}

const corolla = new Carro('Toyota', 'Branco', 1 / 12)
console.log(corolla.calcularGastoDeViagem(70, 5))

const civic = new Carro('Honda', 'Preto', 1 / 16)
console.log(civic.calcularGastoDeViagem(70, 5))