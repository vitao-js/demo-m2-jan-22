

const Api = class Api{
    static BASEURL = "https://atividade-api-clientes.herokuapp.com/clientes"

    static async getUsers(){
        const response = await fetch(this.BASEURL)
        const data = await response.json()
        return data
    }

    static async createUser(body){
        const response = await fetch(this.BASEURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        return data
    }
}

export default Api