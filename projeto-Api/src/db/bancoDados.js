import Api from '../models/Api.js';

class BancoDados {
  static clientes = [];
  static lista = document.getElementById('lista');

  static async renderizar() {
    this.clientes = await Api.getUsers();

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

    const button = document.createElement('button');
    button.innerText = 'Deletar Usuário';
    button.id = cliente.id;
    button.addEventListener('click', this.deletarUsuario);
    container.appendChild(button);
    return container;
  }

  static async deletarUsuario(event) {
    const id = event.currentTarget.id;
    await Api.deleteUser(id);
    BancoDados.renderizar();
  }
}

export { BancoDados };
