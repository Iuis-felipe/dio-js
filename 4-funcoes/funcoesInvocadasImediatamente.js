function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
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

// Esse tipo de função é útil para isolar o código e rodar apenas uma vez. Bom para a web
(function () {
    var peso = 76
    var altura = 1.76

    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))
})();
