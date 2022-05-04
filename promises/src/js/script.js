/**
 * ASYNC/AWAIT
 **/
// async function pegarUsuario() {
//     const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
//     const responseJSON = await response.json();

//     console.log(responseJSON);
// }

// pegarUsuario();

/**
 * PROMISE
 **/

// function retornaPromise(nome) {
//     return new Promise((resolve, reject) => {
//         if (nome === "Victor") {
//             resolve("Nome é Victor");
//         } else {
//             reject("Nome não é Victor");
//         }
//     })
// }

// const meuValor = retornaPromise();

// //then => então
// //catch => pegar => pegar algum erro
// meuValor.then((churros) => {
//     return churros.toUpperCase();
// }).then((churros) => {
//     console.log(churros);
// }).catch((err) => {

// })

/**
 * FETCH com PROMISE
 **/
async function pegarUsuario() {
    const usuarios = []

    await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        .then((response) => {
            return response.json()
        })
        .then((listaUsuarios) => {
            listaUsuarios.forEach((usuario) => {
                usuarios.push(usuario);
            })
        })
        .catch((err) => {
            console.log("Esse é o meu erro na segunda tratativa: " + err)
        })

    console.log(usuarios);
    // return usuario
}

pegarUsuario();