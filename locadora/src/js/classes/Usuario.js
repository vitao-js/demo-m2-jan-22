class Usuario {
    constructor(id, nome, email, password, listaFavoritos, assistirDepois) {
        this._id                = id;
        this._nome              = nome;
        this._email             = email;
        this._password          = password;
        this._listaFavoritos    = listaFavoritos;
        this._assistirDepois    = assistirDepois;
    }
}

export { Usuario }