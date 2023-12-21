let input = document.querySelector("input");
let button = document.querySelector("button");
let div = document.querySelector("div");

let codigoCliente = 0;

function pulaLinha() {
    document.write("<br>");
}

function divisor() {
    div.appendChild(document.createElement("hr"));
}

function adicionarCategoria() {
    // Cria um elemento de paragrafo
    let criarP = document.createElement("p");
    // Incrementa +1 no códigoCliente a cada click
    codigoCliente += 1;
    // Texto para adicionar ao paragrafo
    let texto = `<p> Código: ${codigoCliente} <br> Nome: ${input.value}`
    // criarP recebe a variavel de texto
    criarP.innerHTML = texto;
    // Irá adicionar um elemento filho a div (Pai)
    div.appendChild(criarP);
    divisor();
}

button.onclick = adicionarCategoria;