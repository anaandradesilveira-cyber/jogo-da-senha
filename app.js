alert('boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentativas = 1;   

// enquanto chute não for igual ao n.s
while (chute != numeroSecreto){
    chute = prompt('escolha um número entre 1 e 10');

    // se o numero for igual ao numero secreto
if (chute == numeroSecreto){
    alert(`isso aí!, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    if (chute > numeroSecreto){
        alert(`o número secreto é menor que ${chute}`);
    } else {
        alert(`o número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
}
