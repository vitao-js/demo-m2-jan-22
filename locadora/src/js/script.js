import Usuario from "./classes/Usuario.js";
import { Lista } from "./classes/Lista.js"
import { Filme } from "./classes/Filme.js"
import { Serie } from "./classes/Serie.js"

const listaAssistirDepois = new Lista(1, "Assistir Depois");
const usuarioLogado = new Usuario(1, "Victor Augusto", "kenzie@kenzie.com.br", "123456", [], listaAssistirDepois);


const shingeki = new Filme(1, "Attack on Titan: final season", [], 16, [], "", []);
const churrosMan = new Filme(2, "ChurrosMan: O Inicio", [], 18, [], "", []);
const interestelar = new Filme(3, "interestelar", [], 16, [], "", []);


usuarioLogado._assistirDepois.addFilme(shingeki)
                             .addFilme(churrosMan)
                             .addFilme(interestelar);

usuarioLogado._assistirDepois.removeFilme(interestelar);

usuarioLogado._assistirDepois.filmes[0]._classificacao


// Filme.alterarIdioma();
console.log(Serie.idioma);


// const btnCriarUsuario = document.getElementById("btnCriarUsuario");
// const bancoDeDados = [];

// btnCriarUsuario.addEventListener("click", function(evt) {
//     const elemUsuario = document.getElementById("inputNomeUsuario");
//     const nomeUsuario = elemUsuario.value;

//     const usuario = new Usuario(1, nomeUsuario, "kenzinho@kenzie.com.br", "kenziemade", [], []);

//     bancoDeDados.push(usuario);
    // console.log(bancoDeDados)
// })
