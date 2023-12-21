let input = document.querySelector("input");
let button = document.querySelector("button");
let buttonListar = document.getElementById("botaoMostrarLista");
let div = document.querySelector("div");
let categorias = [];
div.style.display = "none";

let codigoCategoria = 0;

function pulaLinha() {
    document.write("<br>");
}

function divisor() {
    div.appendChild(document.createElement("hr"));
}

button.addEventListener("click", function () {
    adicionarCategoria();
});

buttonListar.addEventListener("click", function () {
    if (buttonListar.innerHTML === "Exibir lista") {
        exibirCategoriasNaTela();
    } else {
        div.style.display = "none";
        buttonListar.innerHTML = "Exibir lista";
    }
})

function adicionarCategoria() {
    codigoCategoria += 1;

    let infoCategorias = {
        codigoCategoria: codigoCategoria,
        nomeCategoria: input.value
    };

    categorias.push(infoCategorias);
    console.log(categorias);
    console.log(categorias.length);
}

function exibirCategoriasNaTela() {
    // Limpa o conteúdo anterior
    div.innerHTML = "";

    // Itera sobre o array de categorias e adiciona ao DOM
    for (let i = 0; i < categorias.length; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = `Código: ${categorias[i].codigoCategoria} <br> Nome: ${categorias[i].nomeCategoria}`;
        div.appendChild(paragrafo);
    }

    // Exibe a div de categorias
    div.style.display = "block";
    buttonListar.innerHTML = "Esconder Lista";
}