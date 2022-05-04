function getClientes() {
    const URL = "https://atividade-api-clientes.herokuapp.com/clientes/";

    fetch(URL)
        .then((response) => {
            //Javascript object notation
            return response.json()
        }).then((response) => {
            tratarDadosClientes(response)
        })
}

getClientes();

function tratarDadosClientes(arrClientes) {

}