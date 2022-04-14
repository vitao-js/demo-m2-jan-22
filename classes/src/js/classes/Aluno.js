class Aluno extends Pessoa{
    constructor(nome, idade, cpf) {
        super(nome, idade, cpf)
    }

    separarNome() {
        this.nome = this.nome.split(" ");
        return this;
    }

    juntarNome() {
        this.nome = this.nome.join(" ")
        return this;
    }
}

const kenzinho = new Aluno("Kenzinho da Silva Sauro", 37, "184951261");

console.log(kenzinho.separarNome())

// "Victor Augusto".split(" ").join(" ").reverse(" ")