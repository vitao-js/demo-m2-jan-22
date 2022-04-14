class Card {
    constructor(elemPai) {
        const card = this.construirCard(elemPai)
        this.adicionaEventListenerCard(card);
    }

    construirCard(elemPai) {
        const div = document.createElement("div");
        div.classList.add("Card");

        elemPai.append(div);
        return div;
    }

    adicionaEventListenerCard(card) {
        card.addEventListener("click", (evt) => {
            //codiguin
        })
    }
}

const box = document.querySelector(".box");
const cardzin = new Card(box)