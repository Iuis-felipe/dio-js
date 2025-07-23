/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
 * adequado
 * 
 * Código Condição de pagamento:
 *  - À vista Débito, recebe 10% de desconto;
 *  - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 *  - Em duas vezes, preço normal de etiqueta sem juros;
 *  - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
 * 
 */

function aplicaDesconto(valor, desconto) {
    return (valor - (valor * desconto / 100))
}

function aplicaJuros(valor, juros) {
    return (valor + (valor * juros / 100))
}

const precoEtiqueta = 100
var formaPagamento = 4

if (formaPagamento === 1) {
    console.log("Valor total com desconto débito: " + aplicaDesconto(precoEtiqueta, 10))
} else if (formaPagamento === 2) {
    console.log("Valor total com desconto PIX: " + aplicaDesconto(precoEtiqueta, 15))
} else if (formaPagamento === 3) {
    console.log("Valor total parcelado duas vezes: " + precoEtiqueta)
} else {
    console.log("Valor total com juros: " + aplicaJuros(precoEtiqueta, 10))
}