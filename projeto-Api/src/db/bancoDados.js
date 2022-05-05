class BancoDados {
  static clientes = [
    {
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
    },
    {
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
    },
    {
      id: 2,
      nome: 'Anderson Cauê André Galvão',
      idade: 69,
      cpf: '30385835027',
      data_nasc: '21/01/1953',
      sexo: 'Masculino',
      email: 'anderson_caue_galvao@pq.cnpq.br',
      endereco: {
        cep: '64045380',
        rua: 'Avenida João XXIII',
        numero: 455,
        bairro: 'São João',
        cidade: 'Teresina',
        estado: 'PI',
      },
      telefone_fixo: '8639405162',
      pedidos: [1, 9, 10, 12],
    },
  ];
  static lista = document.getElementById('lista');

  static renderizar() {
    this.lista.innerHTML = '';
    this.clientes.forEach((cliente) => {
      const card = this.template(cliente);
      this.lista.appendChild(card);
    });
  }

  static template(cliente) {
    const container = document.createElement('li');
    container.innerHTML = `
    <p><span>Nome:</span> ${cliente.nome}</p>
    <p><span>Idade:</span> ${cliente.idade}</p>
    <p><span>cpf:</span> ${cliente.cpf}</p>
    <p><span>Endereço:</span> ${cliente.endereco.rua}, N°${
      cliente.endereco.numero
    } - ${cliente.endereco.bairro}, ${cliente.endereco.cep} - ${
      cliente.endereco.cidade
    }/${cliente.endereco.estado} </p>
    <p><span>Telefone:</span> ${cliente.telefone_fixo}</p>
    <p><span>E-mail:</span> ${cliente.email}</p>
    <p><span>Data de nascimento:</span> ${cliente.data_nasc}</p>
    <p><span>Pedidos:</span> ${cliente.pedidos.join(', ')}.</p>
    `;

    return container;
  }
}

export { BancoDados };
