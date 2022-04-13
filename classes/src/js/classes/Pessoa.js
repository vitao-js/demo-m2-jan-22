/**
 * Sugar Syntax
 */
class Pessoa {
    constructor(nome, idade, cpf) {
        this._nome = nome;
        // this.altura = altura;
        this.idade = idade;
        this._cpf = cpf;
        
        // this.nacionalidade = nacionalidade;
        // this.estadoCivil = estadoCivil || "Solteiro";
    }

    get nome() {
        return this._nome.toUpperCase();
    }

    set nome(nome) {
        this._nome = nome + " Lima"
    }


    codar() {
        console.log("Oh meu deus, encontrei um bug");
    }

    pensar() {
        const mensagem = `Seria meu nome "${this.nome}" ou "${this.nome}" sou eu.`;

        const nomeSeparado = this.nome.split(" ");

        console.log(mensagem);
    }
}


// const victor = new Pessoa("Victor Augusto", "9", 18, "Brasileiro", "Solteiro");
// const jardel = new Pessoa("Jardel F.", "7", 20, "Brasileiro", "Casado");

// console.log(victor)
// console.log(jardel)


/**
 * Function Syntax
 */
// function Pessoa (nome, altura, idade, nacionalidade, estadoCivil) {
//     this.nome = nome;
//     this.altura = altura;
//     this.idade = idade;
//     this.nacionalidade = nacionalidade;
//     this.estadoCivil = estadoCivil || "Solteiro";
// }

// Pessoa.prototype.codar = function() {
//     console.log("Oh meu deus, encontrei um bug");
// }




// const victor = {
//     nome: "Victor Augusto",
//     altura: "9.99",
//     idade: 18,
//     nacionalidade: "Brasileiro",
//     estadoCivil: "Solteiro"
// }

// const jardel = {
//     nome: "Jardel F.",
//     altura: "7",
//     idade: 20,
//     nacionalidade: "Brasileiro",
//     estadoCivil: "Solteiro"
// }


















