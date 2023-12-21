let input = document.querySelector("input");
let button = document.querySelector("button");
let buttonListar = document.getElementById("botaoMostrarLista");
let div = document.querySelector("div");
div.style.display = "none";

let codigoCliente = 0;

function pulaLinha() {
    document.write("<br>");
}

function divisor() {
    div.appendChild(document.createElement("hr"));
}

button.addEventListener("click", function() {
    adicionarCategoria();
});

buttonListar.addEventListener("click", function() {
    if (buttonListar.innerHTML === "Exibir lista") {
        div.style.display = "block";
        buttonListar.innerHTML = "Esconder lista";

    } else {
        div.style.display = "none";
        buttonListar.innerHTML = "Exibir lista";
    }
})

function adicionarCategoria() {
    // Cria um elemento de paragrafo
    let criarP = document.createElement("p");
    // Incrementa +1 no códigoCliente a cada click
    codigoCliente += 1;
    // Texto para adicionar ao paragrafo
    let texto = `<p> Código: ${codigoCliente} <br> Nome: ${input.value}`
    // criarP recebe a variavel de texto
    criarP.innerHTML = texto;
    alert("Categoria cadastrada com sucesso");
    // Irá adicionar um elemento filho a div (Pai)
    div.appendChild(criarP);
    divisor();
}


