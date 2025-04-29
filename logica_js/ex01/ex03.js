// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou
// igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre
// "Tente novamente para ganhar.".

let score = Number(prompt('Pontos: '));

if (score >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}
