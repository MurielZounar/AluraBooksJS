const btnOrdPreco = document.getElementById("btnOrdenarPorPreco")
btnOrdPreco.addEventListener("click", ordenaPorPreco)

function ordenaPorPreco() {
    let livrosOrdenados = livros.sort(
        (menor, maior) => menor.preco - maior.preco
    )
    exibirLivros(livrosOrdenados)
}
