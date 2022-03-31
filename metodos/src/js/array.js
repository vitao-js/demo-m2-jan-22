/**
 * @todo
 * Voltar em replace com callback 
 * Pegar a segunda ocorrência de uma string
 * Artigo template string
 */
/**
 * DONE - INCLUDES
 * DONE - TOSTRING
 * DONE - INDEXOF
 * DONE - PUSH & POP - adiciona e remove o último item
 * DONE - UNSHIFT & SHIFT - adiciona e remove o primeiro item
 * DONE - JOIN
 * DONE - REVERSE
 * DONE - FOREACH & MAP
 * DONE - FILTER & FIND
 * DONE - EVERY & SOME
 * REDUCE - Home work
 * SORT - Home work
 * SLICE - Home work
 */

const series = ["Peaky Blinders", "One Piece", "The Office", "The Witcher", "Vikings"] 

// console.log(series.includes("One Piece"));//Retorna true se o array possui o valor procurado
// console.log(series.toString());//Transforma o array em string
// console.log(series.indexOf("Office"))//Retorna a posição do array onde o valor se encontra
// console.log(series.push("Kingdom", "Breaking Bad"));//Adiciona itens no fim do array
// console.log(series.pop());//Remove itens no final do array
// console.log(series.join(";"))//Transforma array em string separados pelo parâmetro separador
// console.log(series.reverse());//Inverte a ordem do Array



/**
 * FOREACH
 * Executa a função de Callback para cada item do array.
 */
// series.forEach(mostraPosicaoFilmes)

// function mostraPosicaoFilmes(elem, index, array) {
//     // const mensagem = `Minha serie favorita é: ${elem}`;
//     const mensagem2 = `A serie ${elem} está na posição ${index}`;
//     console.log(mensagem2)
// }

// series.forEach((elem, index, array) => {
//     // const mensagem = `Minha serie favorita é: ${elem}`;
//     const mensagem2 = `A serie ${elem} está na posição ${index}`;
//     return mensagem2;
// })

/**
 * FOREACH
 * Executa a função de Callback para cada item do 
 * array e gera um novo array com os valores retornados pelo Callback.
 */
// const seriesUpperCase = series.map(function(elem, index, array) {
//     return elem.toUpperCase();
// })


/**
 * FILTER
 * Retorna um array com todos os itens que passem pelo filtro
 * 
 * FIND
 * Retorna um único (primeiro) item que passe pelo filtro
 */
// const seriesFiltradas = series.filter(function(elem, index, array) {
//     return index % 2 === 0 
// })

// const seriesFiltradas2 = series.find(function(elem, index, array) {
//     return index % 2 === 0 
// })

// console.log(seriesFiltradas2);


/**
 * EVERY
 * Retorna true se TODOS os itens passarem pelo teste
 * 
 * SOME
 * Retorna true se AO MENOS UM item passar pelo teste
 */
// const todosPassaramTeste = series.every(palavrasMaioresQueSete)

// function palavrasMaioresQueSete(elem, index, array) {
//     return elem.length > 5
// }

// const algunsPassaramTeste = series.some((elem, index, array) => {
//     return elem.length > 15
// })

// console.log(algunsPassaramTeste)


