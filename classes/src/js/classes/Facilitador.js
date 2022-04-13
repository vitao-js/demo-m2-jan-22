class Facilitador extends Pessoa {
    constructor(nome, idade, cpf, modulo, conhecimento, devs) {
        super(nome, idade, cpf);

        this._nome = this._nome.toUpperCase();
        this.modulo = modulo;
        this.conhecimento = conhecimento;
        this.devs = devs;
    }

    codar() {
        // super.codar();
        console.log("Oh meu deus, resolvi um bug. Sou muito bom!");
    }

    corrigirAtividade() {

    }

    fazerOneOnOne() {

    }
}

const maria = new Facilitador("Maria Ferrari", 18,"12345678909","m2", ["HTML", "JS", "CSS"], ["Kenzinho", "Kenzinho2"]);
maria.nome = "Jardel F.";

console.log(maria.idade)