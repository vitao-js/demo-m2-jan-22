

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

    static async updateUser(body, user_id){
        const response = await fetch(`${this.BASEURL}/${user_id}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json()).catch(err => console.log(err))
        
        return response
        /*
        const data = await response.json()
        return data
        */
    }

    static async deleteUser(user_id){
        const response = await fetch(`${this.BASEURL}/${user_id}`,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }}
            )
        const data = await response.json()
        return data
    }
}

export default Api