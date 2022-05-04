class Lista {
    constructor(id, nome, filmes = []) {
        this._id        = id;
        this._filmes    = filmes;

        if (typeof nome != "string") {
            console.error("Não pode colocar número no nome da lista")
        } else {
            this._nome = nome
        }
    }

    get nome() { return this._nome}
    get filmes() { return this._filmes}
    get id() { return this._id}

    set nome(novoNome) {
        if (typeof novoNome != "string") {
            console.error("Não pode colocar número no nome da lista")
        } else {
            this._nome = novoNome
        }
    }
    set filmes(novoFilmes) {this._filmes = novoFilmes}

    addFilme(filme) {
        this.filmes.push(filme);
        return this;
    }

    removeFilme(filmeRemovido) {
        const minhaNovaLista = this.filmes.filter(filme => {
            return filme._nome != filmeRemovido._nome
        })

        this.filmes = minhaNovaLista;

        return this;
    }
}

export { Lista }