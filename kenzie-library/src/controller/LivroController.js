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
}