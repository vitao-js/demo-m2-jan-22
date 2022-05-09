import Api from '../models/Api.js';
import { Modal } from '../models/Modal.js';
import { User } from '../models/User.js';

class BancoDados {
  static clientes = [];
  static lista = document.getElementById('lista');

  static async renderizar() {
    this.lista.innerHTML == '';

    await BancoDados.listarClientes();
    this.clientes.forEach((cliente) => {
      const card = this.template(cliente);
      this.lista.appendChild(card);
    });
  }

  static async listarClientes() {
    const data = await Api.getUsers();

    this.clientes = data.map((element) => new User(element));
  }

  static async cadastrarCliente(event) {
    event.preventDefault();

    const inputs = event.target;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        const name = inputs[i].name;
        const value = inputs[i].value;
        data[name] = value;
      }

      inputs[i].value = '';
    }

    const { cep, rua, numero, bairro, cidade, estado, ...novoCliente } = data;

    novoCliente.endereco = {
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
    };

    await Api.createUser(novoCliente);
    await BancoDados.renderizar();

    Modal.removerModal();
  }

  /* static template(cliente) {
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
  } */

  static template(cliente) {
    function templateP(chave, valor) {
      const p = document.createElement('p');
      const span = document.createElement('span');
      span.innerText = `${chave}: `;
      const text = document.createTextNode(valor);

      p.appendChild(span);
      p.appendChild(text);
      p.classList.add('card__line');

      return p;
    }

    const valores = {
      Nome: cliente.nome,
      Idade: cliente.idade,
      cpf: cliente.cpf,
      Endereço: cliente.enderecoCompleto(),
      Telefone: cliente.telefone_fixo,
      'E-mail': cliente.email,
      'Data de Nascimento': cliente.data_nasc,
      Pedidos: cliente.pedidos?.join(', ') || 'Não possui pedidos',
    };

    const container = document.createElement('li');
    container.classList.add('card');

    const pContainer = document.createElement('div');
    pContainer.classList.add('card__innerContainer');

    Object.entries(valores).forEach((arrayDeValores) => {
      const p = templateP(arrayDeValores[0], arrayDeValores[1]);
      pContainer.appendChild(p);
    });

    const button = document.createElement('button');
    button.innerText = 'Deletar Usuário';
    button.id = cliente.id;
    button.classList.add('card__button');
    button.addEventListener('click', this.removerCliente);

    container.appendChild(pContainer);
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
