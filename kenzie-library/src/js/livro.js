async function receberMeusLivros() {
    const meusLivros = await LivrosController.receberMeusLivros();

    await criarTabela(meusLivros);
    criarHandlerLinhas();
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

function criarHandlerLinhas() {
    const linhas = document.querySelectorAll("#tabela-livros tbody tr")
    
    linhas.forEach((linha) => {
        linha.addEventListener("click", editarLivro)
    })
}

async function editarLivro(event){
    const id = event.currentTarget.dataset.livroId;
    const livros = await LivrosController.receberMeusLivros();
    const livroSelecionado = livros.find((livro) => {
        return livro.id == id;
    })

    localStorage.setItem("EditBook", JSON.stringify(livroSelecionado))
    localStorage.setItem("EditBookId", id);
    window.location = "./../pages/editarLivro.html"
}

receberMeusLivros();