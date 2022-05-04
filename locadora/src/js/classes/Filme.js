class Filme {
    static idioma = "Português";

    constructor(id, nome, categorias, classificacao, elenco, imagem, diretores) {
        this._vezesAssistido    = 0;
        this._favoritos         = 0;
        this._avaliacao         = 5;
        this._id                = id;
        this._nome              = nome;
        this._categorias        = categorias;
        this._classificacao     = classificacao;
        this._elenco            = elenco;
        this._imagem            = imagem;
        this._diretores         = diretores;
    }

    addFavorito() {
        this._favoritos = this._favoritos + 1;
        return this;
    }

    addAssistido() {
        this._vezesAssistido = this._vezesAssistido + 1;
        return this;
    }

    static alterarIdioma() {
        console.log("Foi alterado")
    }

    /**
     * @todo Avaliacao + Histórico de Avaliacao
     */
    addAvaliacao() {
        console.log("Foi avaliado")
    }
}

// function Filme(id, nome, categorias, classificacao, elenco, imagem, diretores) {
//     this._vezesAssistido    = 0;
//     this._favoritos         = 0;
//     this._avaliacao         = 5;
//     this._id                = id;
//     this._nome              = nome;
//     this._categorias        = categorias;
//     this._classificacao     = classificacao;
//     this._elenco            = elenco;
//     this._imagem            = imagem;
//     this._diretores         = diretores;
// }

// Filme.prototype.addAssistido = function() {
//     this._favoritos = this._favoritos + 1;
//         return this;
// }


export {
    Filme
}