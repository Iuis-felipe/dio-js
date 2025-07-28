class Pessoa {
    nome
    idade

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const luis = new Pessoa()
luis.nome = "Luís Felipe"
luis.idade = "21"

const pam = new Pessoa()
pam.nome = "Pâmela"
pam.idade = "21"

luis.descrever()
pam.descrever()