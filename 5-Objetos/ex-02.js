/* 
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
 * do seu IMC
 * 
 */

class Pessoas {
    nome
    peso
    altura

    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc()

        if (imc < 18.5) {
            return "Abaixo do peso"
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal"
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso"
        } else if (imc >= 30 && imc < 40) {
            return "Obeso"
        } else {
            return "Obesidade grave"
        }
    }
}

const jose = new Pessoas("José", 70, 1.75)
console.log(jose.calcularImc())
console.log(jose.classificarImc())

console.log("")

const luis = new Pessoas("Luis", 77, 1.76)
console.log(luis.calcularImc())
console.log(luis.classificarImc())