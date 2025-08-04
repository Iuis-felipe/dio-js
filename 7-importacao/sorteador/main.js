const { gets, print } = require('./funcoesAux')

let maiorValorEncontrado = 0

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets()
    if(numerosSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numerosSorteado
    }
}
print(maiorValorEncontrado)


//OUTRA MANEIRA DE FAZER
//const numerosSorteados = []
// let maiorValor = 0

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numerosSorteado = numerosSorteados[i];
//     if(numerosSorteado > maiorValor){
//         maiorValor = numerosSorteado
//     }
// }

// print(numerosSorteados)
// print(maiorValor)

/*
 * Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 * Faça um programa que receba os 5 números sortados para os alunos e mostre o maior número sorteador.
 * 
 * Dados de entrada:
 * 
 * 5
 * 50
 * 10
 * 98
 * 23
 * 
 * Saída:
 * 98
 *
 * */