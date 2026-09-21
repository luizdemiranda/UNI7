const precoProduto = 150;
let quantidade = 3;
let estoque = 10;
let possuiCupom = false;
let clientePremium = false;
let pagamentoAprovado = true;
let clienteBloqueado = false;
let tentativasdePagamento = 1;

// Calculo do subtotal da compra junto do desconto de 10% para quem possui cupom ou é cliente Premium.
function calcularSubTotal(preco, quantidade) {
    let subtotal = preco * quantidade;

    if (possuiCupom || clientePremium) {
        return subtotal - (subtotal * 10 / 100);
    } else {
        return subtotal;
    }
}

//Validação do pedido.
function validarPedido() {
    if (estoque < 1) {
        return "Pagamento recusado por falta de estoque! por favor, verifique novamente mais tarde.";
    } else if (tentativasdePagamento < 1) {
        return "Tentativas de pagamento insuficientes";
    } else if (clienteBloqueado) {
        return "Clente Bloqueado! Por favor, verifique a situação de sua conta.";
    } 
    else {
        return pagamentoAprovado ? "Pagamento Aprovado!" : "Pagamento Recusado!";
    }
}

console.log(calcularSubTotal(precoProduto, quantidade));
console.log(validarPedido());