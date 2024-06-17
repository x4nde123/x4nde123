

document.addEventListener("DOMContentLoaded", function() {
    const carrinho = [];
    const botoesAdicionarCarrinho = document.querySelectorAll(".adicionar-carrinho");
    const quantidadeCarrinho = document.getElementById("quantidade-carrinho");

    botoesAdicionarCarrinho.forEach((botao, index) => {
        botao.addEventListener("click", function() {
            carrinho.push(index);
            quantidadeCarrinho.textContent = carrinho.length;
        });
    });

    document.getElementById("botao-pesquisa").addEventListener("click", function() {
        const termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
        const produtos = document.querySelectorAll(".produto");
        produtos.forEach(produto => {
            const titulo = produto.querySelector("h3").textContent.toLowerCase();
            if (titulo.includes(termoPesquisa)) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    });
});