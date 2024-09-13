function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDEsconto = livros.map((livro) => {
        return { ...livro, preco: livro.preco - livro.preco * desconto }
    })

    return livrosComDEsconto
}
