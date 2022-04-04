function adicionarEventListenerCard() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.addEventListener("click", function(event) {
            // alert("Mais info do produto");
        }, true)
    })
}

function adicionarEventListenerBotao() {
    const buttons = document.querySelectorAll(".card__button")
    buttons.forEach(btn => {
        btn.addEventListener("click", comprarProduto, true)
    })  
}

function comprarProduto (event) {
    event.stopPropagation();

    console.log(event.target.id);
}

function removerEventListenerBotao() {
    const buttons = document.querySelectorAll(".card__button");
    buttons.forEach((btn) => {
        btn.removeEventListener("click", comprarProduto)
    }) 
}
function criarCards(arrayProdutos) {
    const box = document.querySelector(".box");

    arrayProdutos.forEach(elem => {
        const card = document.createElement("div");
        card.classList.add("box__card", "card")

        card.appendChild(criarCardHeader(elem));
        card.appendChild(criarCardContent(elem));
        card.appendChild(criarCardFooter(elem));

        box.appendChild(card);
    })
}

function criarCardHeader(elem) {
    const header = document.createElement("div");
    const title = document.createElement("span");

    header.classList.add("card__header");
    title.classList.add("card__title");

    title.innerText = elem.produtoNome

    header.appendChild(title)

    return header;
}

function criarCardContent(elem) {
    const content = document.createElement("div");
    const image = document.createElement("img");
    const paragraph = document.createElement("p");
    const price = document.createElement("span");

    content.classList.add("card__content");
    image.classList.add("card__image");
    paragraph.classList.add("card__text");
    price.classList.add("card__price");

    image.src = "assets/img/image_test.png";
    paragraph.innerText = elem.produtoNome;
    price.innerText = elem.preco;

    content.append(image,paragraph,price);

    return content
}

function criarCardFooter(elem) {
    const footer = document.createElement("div");
    const button = document.createElement("button");

    footer.classList.add("card__footer");
    button.classList.add("card__button", "card__button--success");

    button.innerText = "Comprar";
    button.id = elem.id;

    footer.appendChild(button)

    return footer;
}

criarCards(dataProdutos);
adicionarEventListenerCard();
adicionarEventListenerBotao();
// removerEventListenerBotao();
