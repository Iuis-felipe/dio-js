class Pessoa {
    nome
    idade
    anoDeNascimento

    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2025 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const luis = new Pessoa('Luís', 21)
const pam = new Pessoa('Pam', 21)

luis.descrever()
pam.descrever()