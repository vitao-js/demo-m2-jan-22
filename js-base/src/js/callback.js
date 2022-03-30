const VALORES_CALLBACK = [2,5];


function calculadora(valores, callback) {
    callback(valores);
}

function somar(valores) {
    const [valor1, valor2] = valores;

    return valor1 + valor2;
}

function subtrair(valores) {
    const [valor1, valor2] = valores;
    
    return valor1 - valor2;
}

function dividir(valores) {
    const [valor1, valor2] = valores;
    
    return valor1 / valor2;
}

let resultado = calculadora(VALORES_CALLBACK, somar);
console.log(resultado);


