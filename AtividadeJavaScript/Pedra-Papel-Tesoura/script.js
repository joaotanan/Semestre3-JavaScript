let opcoes = ["pedra", "papel", "tesoura"];

let jogador = prompt("Escolha: pedra, papel ou tesoura");

let computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Jogador:", jogador);
console.log("Computador:", computador);

if (jogador == computador) {
    console.log("Empate!");
}
else if (
    (jogador == "pedra" && computador == "tesoura") ||
    (jogador == "papel" && computador == "pedra") ||
    (jogador == "tesoura" && computador == "papel")
) {
    console.log("Você venceu!");
}
else {
    console.log("Computador venceu!");
}