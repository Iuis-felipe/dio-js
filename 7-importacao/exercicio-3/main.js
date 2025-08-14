const { gets, print } = require('./funcoes-auxiliares-ex3')

const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPercentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0.00 && salario <= 1100.00) {
        return 5
    } else if (salario > 1100.00 && salario <= 2500.00) {
        return 10
    } else {
        return 15
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto)
const valorImposto = calcularPercentagem(salarioBruto, aliquotaImposto)

const valorATransferir = salarioBruto - valorImposto + adicionalBeneficios

print(valorATransferir);