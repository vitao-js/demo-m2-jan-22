//licença didática
// var nome = "Victor Augusto"

/**
 * this => Quando chamado no escopo global é = window
 */
// console.log(this);

/**
 * this => Quando chamado dentro de uma função no
 *         escopo global é = window
 */
// function mostrarNome() {
//     return this.nome;
// }

/**
 * this => Quando chamado dentro de um objeto
 *         é = ao próprio objeto
 */
// const facilitador = {
//     nome: "Maria Ferrari",
//     apresentar: function() {
//         return `Olá, meu nome é ${this.nome}`
//     },
// }

// console.log(mostrarNome());
// console.log(facilitador.apresentar());

// var nome = "Victor Augusto"

function apresentarModulo() {
    return this.modulo;
}

const facilitador = {
    nome: "Maria Ferrari",
    modulo: "M2",
    conhecimento: [
        "JS",
        "HTML",
        "CSS",
        "REACT"
    ],
    apresentarModulo: apresentarModulo,
    apresentar: function() {
        return `Olá, meu nome é ${this.nome}, e estou trabalhando no ${this.modulo}`
    },
    mostrarValores: function() {
        this.conhecimento.forEach((elem) => {
            console.log(`Eu, ${this.nome} conheço ${elem}`);
        })  
    }
}