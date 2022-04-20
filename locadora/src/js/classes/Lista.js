class Lista {
    constructor(id, nome, filmes) {
        this._id        = id;
        this._nome      = nome;
        this._filmes    = filmes;
    }

    get nome() { return this._nome}
    get filmes() { return this._filmes}
    get id() { return this._id}

    set nome(novoNome) {this._nome = novoNome}
    set filmes(novoFilmes) {this._filmes = novoFilmes}

    addFilme(filme) {
        this._filmes.push(filme);
        return this;
    }

    removerFilme(filmeRemovido) {
        const minhaNovaLista = this.filmes.filter(filme => {
            return filme._nome != filmeRemovido._nome
        })

        this.filmes = minhaNovaLista;

        return this;
    }
}

export { Lista }