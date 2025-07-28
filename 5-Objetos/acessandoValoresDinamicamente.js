const luis = {
    nome: "Luís Felipe",
    idade: 21,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

console.log(luis['nome'])