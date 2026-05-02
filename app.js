alert('boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('escolha um número entre 1 e 10');

// se o numero for igual ao numero secreto
if (chute == numeroSecreto){
    alert(`isso aí!, você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('você errou :(');
}