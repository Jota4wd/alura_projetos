// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou
// "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dia = prompt('que dia eh hj: ');

if (dia != 'Sábado' && dia != 'Domingo'){
    alert("Boa semana!");
} else {
    alert("Bom fim de semana!");
}
