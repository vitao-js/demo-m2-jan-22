/**
 * FUNÇÕES
 * CALLBACK
 * OPERADOR SPREAD
 * DESESTRUTURAÇÃO
 **/

const NOMES = [
    "Bruno Júnior",
    "Victor Augusto da Silva Lima",
    "Jardel Lacerda",
    "Caique Cavalheiro",
    "Lucas Tenani",
    "Maria Ferrari",
    "Pedro Costa",
    "Guilherme Preveda",
    "Heric Felix",
]

//função deve retornar apenas dois nomes e todos eles com letras minusculas
function doisNomesMinusculos(nomes) {

    for(let contador = 0; contador < nomes.length; contador++) {
        let valor = nomes[contador];

        //separar a string em um array
        let valorSplit = valor.split(" ");

        valor = separaNomeSobrenome(valorSplit)
        let valorToLower = nomeMinusculo(valor)
        
        NOMES[contador] = valorToLower;
    }
}


//recorta o tamanho do array para 2 itens 
// e depois transforma em uma string
function separaNomeSobrenome(nome) {
    return nome.slice(0, 2).join(" ");
}

//Transforma tudo em minúsculo
function nomeMinusculo(nome) {
    return nome.toLowerCase();
}

doisNomesMinusculos(NOMES)
// console.log(NOMES)

// console.log(FACILITADORES);