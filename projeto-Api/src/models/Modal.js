export class Modal {
  static criarModal(children) {
    const containerModal = document.createElement('section');
    containerModal.classList.add('modal');

    const modal = document.createElement('div');

    const removeModal = document.createElement('button');
    removeModal.classList.add('modal__remove');
    removeModal.innerText = 'Fechar modal';
    removeModal.addEventListener('click', Modal.removerModal);

    modal.appendChild(removeModal);
    modal.appendChild(children);
    containerModal.appendChild(modal);
    document.body.appendChild(containerModal);
  }

  static removerModal() {
    const modalSelector = document.querySelector('.modal');

    document.body.removeChild(modalSelector);
  }
}
