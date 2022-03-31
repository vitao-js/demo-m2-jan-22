/**
 * DONE - TOUPPERCASE & TOLOWERCASE
 * DONE - INDEXOF
 * DONE - SPLIT
 * DONE - INCLUDES
 * DONE - CONCAT
 * DONE - REPLACE & REPLACEALL
 * DONE - SLICE
 * DONE - TRIM
 */
const frase = "Never gonna give you up. Never gonna let you down";

// console.log(frase.toUpperCase());//letras maiusculas
// console.log(frase.toLowerCase());//letras minusculas

// console.log(frase.indexOf("never"));//encontra o índice da primeira ocorrência

// console.log(frase.split(" ", 3));//divide a string em array baseado no separador

// console.log(frase.includes("never"));//verifica a existencia da substring dentro da string principal

// console.log("replace: ", frase.replace("gonna", "churros"));//Altera a primeira ocorrencia da substring por outra substring
// console.log("replaceAll: ", frase.replaceAll("gonna", "churros"));//Altera todas as ocorrencias da substring por outra substring

// console.log(frase.slice(20));//Cortar a frase baseado no indice passado

// console.log(frase.trim());//Remove os espaços na esquerda e direita da string








/**
 * Pegar certa ocorrência da palavra  
 */
// let teste = frase.split(" ");

// function trocaPorOcorrencia1(pesquisa, novaPalavra, ocorrencia) {
//     let qtdVezes = 0;

//     let novoTeste = teste.map((palavra) => {
//         if (palavra === pesquisa) {
//             qtdVezes++

            
//             if (qtdVezes === ocorrencia) {
//                 return novaPalavra;
//             }
//         }

//         return palavra
//     })

//     return novoTeste.join(" ");
// }

// console.log(trocaPorOcorrencia1("gonna", "churros", 2));