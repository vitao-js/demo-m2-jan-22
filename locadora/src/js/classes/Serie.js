import { Filme } from "./Filme.js"

class Serie extends Filme {
    constructor(id, nome, categorias, classificacao, elenco, imagem, diretores, temporadas) {
        super(id, nome, categorias, classificacao, elenco, imagem, diretores);
        this._temporadas = temporadas
    }
}

export { Serie }