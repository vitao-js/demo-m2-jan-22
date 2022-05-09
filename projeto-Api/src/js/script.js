import { BancoDados } from '../db/bancoDados.js';
import { Formulario } from '../models/Form.js';
import { Modal } from '../models/Modal.js';

const botaoAdicionar = document.getElementById('addClient');

botaoAdicionar.addEventListener('click', () => {
  Modal.criarModal(Formulario.createForm());
});

BancoDados.renderizar();
