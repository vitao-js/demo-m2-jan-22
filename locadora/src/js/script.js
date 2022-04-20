import { Usuario } from "./classes/Usuario.js";

const btnCriarUsuario = document.getElementById("btnCriarUsuario");
const bancoDeDados = [];

btnCriarUsuario.addEventListener("click", function(evt) {
    const elemUsuario = document.getElementById("inputNomeUsuario");
    const nomeUsuario = elemUsuario.value;

    const usuario = new Usuario(1, nomeUsuario, "kenzinho@kenzie.com.br", "kenziemade", [], []);

    bancoDeDados.push(usuario);
    // console.log(bancoDeDados)
})

/**
 * Todo Vscode video
 */
