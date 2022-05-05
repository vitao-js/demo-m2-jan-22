import Api from "../models/Api.js";

const data = {
    nome: "Jardel",
    idade: 20,
    cpf: "46469467342",
    data_nasc: "27/02/1750",
    sexo: "Masculino",
    email: "guilhermeemanuelbarbosa@toyota.com.br",
    endereco: {
     cep: "38055292",
     rua: "Rua Dois",
     numero: 698,
     bairro: "Residencial Veneza",
     cidade: "Uberaba",
     estado: "MG"
    },
    telefone_fixo: "3425232094",
  }

console.log(data)
console.log(JSON.stringify(data))
console.log()


console.log(await Api.getUsers())
//console.log(await Api.createUser(data))