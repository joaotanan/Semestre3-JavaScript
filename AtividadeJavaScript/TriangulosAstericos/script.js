let linhas = Number(prompt("Digite o número de linhas"));

for (let i = 1; i <= linhas; i++) {

    let estrelas = "";

    for (let j = 1; j <= i; j++) {
        estrelas += "*";
    }

    console.log(estrelas);

}