// function quadrado(valor) {
//     return valor * valor
// }

// const quadradoDeDez = quadrado(10)
// console.log(quadradoDeDez)


function incrementarJuros(valor, percentualJuror) {
    const valorDeAcrecimo = (percentualJuror / 100) * valor
    return valor + valorDeAcrecimo
}

console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(100, 15))
console.log(incrementarJuros(100, 20))