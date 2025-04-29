// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo,
// negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = Number(prompt('numero: '));

if (numero > 0) {
    console.log('positivo');
} else if (numero < 0) {
    console.log('negativo');
} else {
    console.log('zero');
}