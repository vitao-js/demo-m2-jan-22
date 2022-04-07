//Hoisting


/**
 * Função Nomeada
 * Hoisting
 */
function nomeMinhaFuncao() {
    return "[]";
}



/**
 * Função expressiva não nomeada/anonima
 * no Hoisting
 */
let nomeMinhaFuncao2 = function() {
    return "Função 2";
}


/**
 * Arrow Function - não nomeada/anonima
 * no Hoisting
 */
const nomeMinhaFuncao3 = () => {
    return "Função 3";
}


// const minhaFuncao = function() {
//     console.log("primeiraFuncao");
//     minhaSegundaFuncao();
// }

// const minhaSegundaFuncao = function() {
//     console.log("segundaFuncao")
// }

// minhaFuncao();