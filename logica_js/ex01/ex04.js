// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma
// template string para incluir o valor do saldo.

let saldo = parseFloat(prompt('saldo: '));

alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
