class UsuarioController {
    static BASE_URL = "https://api-kenzie-livros.herokuapp.com/";

    static registrarUsuario(dadosUsuario) {
        const URL = `${this.BASE_URL}auth/register`;

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosUsuario)
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    static logarUsuario(dadosUsuario) {
        const URL = `${this.BASE_URL}auth/login`;

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosUsuario)
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            localStorage.setItem("Token", response)
            window.location = `./../pages/livro.html`
        })
        .catch((err) => {
            console.error(err);
        });
    }
}