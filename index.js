const subtotal = document.querySelector("#subtotal");
const selectedProducts = document.querySelectorAll("input[name=product]");
const cupomInput = document.querySelector("#userCupom");
const cupomMessage = document.querySelector("#cupom");
const form = document.querySelector("form");

let productPrice = 0;
let userCupom = false;
let userPremium = false;

const desconto = 10 / 100;
const cupom = "cupomdedesconto";

function atualizarSubtotal() {
    let finalPrice = productPrice;

    if (userCupom || userPremium) {
        finalPrice -= finalPrice * desconto;
    }

    subtotal.textContent = `Subtotal = R$ ${finalPrice.toFixed(2)}`;
}

selectedProducts.forEach((product) => {
    product.addEventListener("change", () => {
        if (product.checked) {
            productPrice = Number(product.value);
            atualizarSubtotal();
        }
    });
});

cupomInput.addEventListener("input", () => {
    if (cupomInput.value === cupom || userPremium === true) {
        userCupom = true;
        cupomMessage.textContent = "Cupom Aprovado!";
    } else {
        userCupom = false;
        cupomMessage.textContent = "Cupom Reprovado!";
    }

    atualizarSubtotal();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
});
