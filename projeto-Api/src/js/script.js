import { BancoDados } from '../db/bancoDados.js';
import Api from '../models/Api.js'

BancoDados.renderizar();

const obj = {
  nom: "Jardel" 
}

/*await Api.createUser({
  nome: 'Jardel',
  idade: 20,
  cpf: '46469467342',
  data_nasc: '27/02/1750',
  sexo: 'Masculino',
  email: 'guilhermeemanuelbarbosa@toyota.com.br',
  endereco: {
    cep: '38055292',
    rua: 'Rua Dois',
    numero: 698,
    bairro: 'Residencial Veneza',
    cidade: 'Uberaba',
    estado: 'MG',
  },
  telefone_fixo: '3425232094',
  pedidos: [1, 5, 7],
})
*/
//console.log(await Api.updateUser(obj, 7))

console.log(await Api.getUsers())

console.log(await Api.deleteUser(7))

console.log(await Api.getUsers())