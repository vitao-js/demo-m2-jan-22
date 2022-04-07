function criarCard(rocket) {
    const box = document.querySelector(".box")
    const card = document.createElement("div");
    card.classList.add("card", "box__card");

    const content = criarCardContent(rocket);

    card.append(content)

    box.appendChild(card)
}

function criarCardContent(rocket){
    const content = document.createElement("div");
    content.classList.add("card__content");

    const title = criarCardTitle(rocket);
    const info = criarCardInfo(rocket);

    content.append(title, info)

    return content;
}

function criarCardTitle(rocket){
    const title = document.createElement("div");
    const h2 = document.createElement("h2")

    title.classList.add("card__title");
    h2.innerText = rocket.rocket_name;

    title.append(h2);
    return title;
}

function criarCardInfo(rocket){
    const info = document.createElement("div");
    const ul = document.createElement("ul");

    info.classList.add("card__info")
    ul.classList.add("card__list", "list")

    Object.entries(rocket).forEach((entrada) => {
        const li = criarListItem(entrada);

        ul.appendChild(li);
    })

    info.appendChild(ul)

    return info;
}

function criarListItem(entrada) {
    const [chave, valor] = entrada;

    const li = document.createElement("li");
    const span = document.createElement("span");

    li.classList.add("card__info");
    span.classList.add("list__value");  

    li.innerText = chave;
    span.innerText = valor;

    li.appendChild(span);

    return li
}

function criarCardDetail(){}
