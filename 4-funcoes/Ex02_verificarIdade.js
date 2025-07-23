function escrevaMeuNome(nome) {
    return "Meu nome é: " + nome
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome("Luís Felipe ") + "e sou Maioridade")
    } else {
        console.log(escrevaMeuNome("Luís Felipe ") + "e sou Menoridade")
    }
}

verificarIdade(22)
