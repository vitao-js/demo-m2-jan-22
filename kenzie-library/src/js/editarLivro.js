function popularDadosLivro() {
    const { titulo, categoria } = JSON.parse(localStorage.getItem("EditBook"))

    const inputTitulo = document.getElementById("titulo");
    inputTitulo.value = titulo;

    const inputCategoria = document.getElementById("categoria");
    inputCategoria.value = categoria;

    criarHandlerSubmit();
}

function criarHandlerSubmit() {
    const form = document.getElementById("form-editar")
    form.addEventListener("submit", atualizarLivro);
}

async function atualizarLivro(event) {
    event.preventDefault();

    const dados = receberDados(event);
    await LivrosController.atualizarLivros(dados, localStorage.getItem("EditBookId"))
    window.location = "./../pages/livro.html"
}

function receberDados(event) {
    const formItens = [...event.currentTarget];
    const values = {};
    
    formItens.forEach((item) => {
        if (item.name != "") {
            //values["titulo"] = "Star Wars"
            //values["categoria"] = "ficção cientifica"
            values[item.name] = item.value;
        }
    })

    return values;
}

popularDadosLivro();