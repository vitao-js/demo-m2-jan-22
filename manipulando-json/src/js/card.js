function criarCard(rocket) {
    const box = document.querySelector(".box")
    const card = document.createElement("div");
    card.classList.add("card", "box__card");

    const content = criarCardContent(rocket);
    const detail = criarCardDetail();

    const [ ,imagem2] = rocket.flickr_images

    card.style.background = `url(${imagem2})`

    card.append(content, detail)

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

    info.classList.add("card__info")
    
    const ul = criarList(rocket);

    info.appendChild(ul)

    return info;
}

function criarList(rocket) {
    const ignorarChave = ["rocket_name", "flickr_images"];
    const ul = document.createElement("ul");

    ul.classList.add("card__list", "list");

    Object.entries(rocket).forEach((entrada) => {
        const [chave, valor] = entrada;

        //TRUE => !TRUE => FALSE
        //FALSE => !FALSE => TRUE

        if (!ignorarChave.includes(chave)) {
            const li = document.createElement("li");
            const span = document.createElement("span");
        
            li.classList.add("card__info");
            span.classList.add("list__value");  
        
            li.innerText = chave;
            span.innerText = valor;
        
            li.appendChild(span);
            ul.appendChild(li);
        }
    })

    return ul;
}

function criarCardDetail(){
    const detail = document.createElement("div");
    const button = document.createElement("button");
    detail.classList.add("card__detail");
    button.classList.add("card__button", "card__button--detail");

    button.innerText = "Mais detalhes";

    detail.append(button);

    return detail;
}