import { BancoDados } from '../db/bancoDados.js';
import { User } from './User.js';

export class Formulario {
  static createInput(nome) {
    const input = document.createElement('input');

    input.setAttribute('type', User.tipos[nome]);
    input.setAttribute('name', nome);
    input.setAttribute('placeholder', `Preencha ${User.descricoes[nome]}`);
    input.classList.add('form__input');
    input.required = true;

    return input;
  }

  static createForm() {
    const form = document.createElement('form');
    form.classList.add('form');
    form.addEventListener('submit', BancoDados.cadastrarCliente);

    const button = document.createElement('button');
    button.classList.add('form__button');
    button.setAttribute('type', 'submit');
    button.innerText = 'Adicionar';

    User.chaves.forEach((nome) => {
      form.appendChild(Formulario.createInput(nome));
    });

    form.appendChild(button);
    return form;
  }
}
