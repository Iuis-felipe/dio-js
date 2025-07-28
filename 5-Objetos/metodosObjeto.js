const luis = {
    nome: "Luís Felipe",
    idade: 21,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

luis.descrever = function () { //fazendo a chamada 
    console.log(`Meu nome é: ${this.nome}`) //é possivel recuperar ate o contexto
} //se o objetivo for sobreescrevar a outra função

luis.descrever()