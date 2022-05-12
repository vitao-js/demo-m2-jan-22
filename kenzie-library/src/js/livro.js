async function receberMeusLivros() {
    const meusLivros = await LivrosController.receberMeusLivros();

    criarTabela(meusLivros);
}

function criarTabela(listaLivros) {
    const tbody = document.querySelector("#tabela-livros tbody")

    listaLivros.forEach(livro => {
        const tr = document.createElement("tr");
        tr.dataset.livroId = livro.id;

        const titulo = document.createElement("td");
        titulo.classList.add("titulo");
        titulo.innerText = livro.titulo;

        const categoria = document.createElement("td");
        categoria.classList.add("categoria");
        categoria.innerText = livro.categoria;

        const autor = document.createElement("td");
        autor.classList.add("autor");
        autor.innerText = livro.autor;

        tr.append(titulo, autor, categoria)
        tbody.append(tr);
    })
}

receberMeusLivros();