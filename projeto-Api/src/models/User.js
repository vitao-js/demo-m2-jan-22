class User {
  static chaves = [
    'nome',
    'idade',
    'cpf',
    'data_nasc',
    'sexo',
    'email',
    'cep',
    'rua',
    'numero',
    'bairro',
    'cidade',
    'estado',
    'telefone_fixo',
  ];

  static descricoes = {
    nome: 'o nome',
    idade: 'a idade',
    cpf: 'o CPF',
    data_nasc: 'a data de nascimento',
    sexo: 'o sexo',
    email: 'o e-mail',
    cep: 'o CEP',
    rua: 'a rua',
    numero: 'o número',
    bairro: 'o bairro',
    cidade: 'a cidade',
    estado: 'o estado',
    telefone_fixo: 'o telefone fixo',
  };

  static tipos = {
    nome: 'text',
    idade: 'number',
    cpf: 'text',
    data_nasc: 'date',
    sexo: 'text',
    email: 'email',
    cep: 'text',
    rua: 'text',
    numero: 'number',
    bairro: 'text',
    cidade: 'text',
    estado: 'text',
    telefone_fixo: 'text',
  };

  constructor({
    id,
    nome,
    idade,
    cpf,
    data_nasc,
    sexo,
    email,
    endereco,
    telefone_fixo,
  }) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.data_nasc = data_nasc;
    this.sexo = sexo;
    this.email = email;
    this.endereco = endereco;
    this.telefone_fixo = telefone_fixo;
  }

  enderecoCompleto() {
    return `${this.endereco.rua}, ${this.endereco.numero} - ${this.endereco.bairro}, ${this.endereco.cep} - ${this.endereco.cidade}/${this.endereco.estado}`;
  }
}
export { User };
