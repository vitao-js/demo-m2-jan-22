function newForEach(array, callback) {
    for(let contador = 0; contador < array.length; contador++) {
        const elem = array[contador];
        const index = contador;

        callback(elem, index, array);
    }
}

const meuArray = [10,12,14,16];

newForEach(meuArray, () => {
    console.log("Victor")    
});
