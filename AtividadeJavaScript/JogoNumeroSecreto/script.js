let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let chute;

while (chute != numeroSecreto) {

    chute = Number(prompt("Digite um número de 1 a 20"));

    if (chute == numeroSecreto) {
        alert("Parabéns! Você acertou!");
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor!");
    } else {
        alert("O número secreto é maior!");
    }

}