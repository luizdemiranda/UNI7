# Atividade Prática - Checkout de Loja Virtual

- OBJEIVO: Desenvolver um programa em javascript que simule a finalização de uma compra.

Dados:

preço = 150;
quantidade = 3;
estoque = 10;
cupom = true or false;
userPremium = true or false;
blockedUser = true or false;
attempts = 1;

StakeHolders:

- Cliente
- Vendedor

# Requisitos Funcionais

- RF001: Subtotal da compra
    O SISTEMA DEVE PERMITIR QUE O USUÁRIO VISUALIZE O SUBTOTAL DE SUA COMPRA.
    
- RF002: Desconto de 10%:
    O SISTEMA DEVE CONCEDER 10% DE DESCONTO PARA OS USUÁRIOS QUE POSSUIREM UM CUPOM OU FOREM USUÁRIOS PREMIUM.

- RF003: valor final
    O SISTEMA DEVE EXIBIR O VALOR TOTAL DA COMPRA.

- RF004: validação de compra
    O SISTEMA DEVE VERIFICAR SE A COMPRA PODE SER APROVADA, SENDO VALIDADA SOMENTE SE: HOUVER PRODUTOS EM ESTOQUE, O PAGAMENTO ESTIVER APROVADO, O CLIENTE NÃO ESTIVER BLOQUEADO.

- RF005: Validação do sistema
    O SISTEMA DEVE EXIBIR MENSSAGENS PARA PEDIDOS APROVADOS, ESTOQUE INSUFICENTE, PAGAMENTO RECUSADO E CLIENTE BLOQUEADO.

# Requisitos Não Funcionais

- RNF001: status de aprovado
    O SISTEMA DEVE EXIBIR O STATUS APROVADO OU NÃO APROVADO UTILIZANDO OPERADOR TERNÁRIO

- RNF002: função calcular subtotal
    O SISTEMA DEVE UTILIZAR UMA FUNÇÃO (calcularSubTotal(preco, quantidade) QUE RETORNE O SUBTOTAL)

- RNF003: função validar pedido
    O SISTEMA DEVE UTILIZAR A FUNÇÃO (validarPedido() que retorne os valores booleanos true ou false conforme as regras do negócio)