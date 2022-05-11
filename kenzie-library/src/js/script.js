function adicionaSubmitRegistrar() {
    const formRegistrar = document.getElementById("form-registrar");
    formRegistrar.addEventListener("submit", registrarUsuario);
}

function registrarUsuario(event) {
    event.preventDefault();

    const dados = recebeDados(event);
    UsuarioController.registrarUsuario(dados)
}

function recebeDados(event) {
    const formItens = [...event.target];
    const values = {};
    
    formItens.forEach((item) => {
        if (item.name != "") {
            //values["name"] = "Churromino"
            //values["email"] = "churros@kenzie.com.br"
            //values["password"] = "123456"
            //{name: "Churromino", email: "churros@kenzie.com.br", password: "123456"}

            values[item.name] = item.value;
        }
    })

    return values;
}

function adicionaSubmitLogin() {
    const formLogin = document.getElementById("form-login");
    formLogin.addEventListener("submit", logarUsuario);
}

function logarUsuario(event) {
    event.preventDefault();

    const dados = recebeDados(event);
    UsuarioController.logarUsuario(dados)
}

adicionaSubmitLogin();
adicionaSubmitRegistrar();



console.log(localStorage.getItem("token"))