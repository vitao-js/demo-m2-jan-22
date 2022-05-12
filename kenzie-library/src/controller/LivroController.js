class LivrosController {
    static BASE_URL = "https://api-kenzie-livros.herokuapp.com/";

    static receberMeusLivros() {
        const URL = `${this.BASE_URL}my/livros`

        return fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    }

    static atualizarLivros(dadosLivro, id) {
        const URL = `${this.BASE_URL}my/livros/${id}`

        return fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(dadosLivro)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    }
}