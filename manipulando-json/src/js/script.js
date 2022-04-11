chamarAPI().then(data => {
    const reordenado = reordenar(data);

    // console.log(mediaSucesso(data));

    reordenado.forEach((rocket) => {
        const remountedObj = limparDados(rocket);
        criarCard(remountedObj)
    })
})

function limparDados(data) {
    const {
        rocket_name,
        active,
        company,
        first_flight,
        cost_per_launch,
        stages,
        boosters,
        success_rate_pct,
        flickr_images 
    } = data;
    
    const remountedObj = {
        rocket_name,
        active,
        company,
        first_flight,
        cost_per_launch,
        stages,
        boosters,
        success_rate_pct,
        flickr_images
    }

    return remountedObj;
}

function reordenar(rockets) {
    return rockets.sort((firstRocket, secondRocket) => {
        const nameFirstRocket = firstRocket.rocket_name.toUpperCase();
        const nameSecondRocket = secondRocket.rocket_name.toUpperCase();

        if (nameFirstRocket < nameSecondRocket) {
            return -1;
        }

        if (nameFirstRocket > nameSecondRocket) {
            return 1;
        }

        return 0;
    })
}

function mediaSucesso(rockets) {
    const soma =  rockets.reduce((acumulador, atual) => {
        return acumulador + atual.success_rate_pct;
    }, 0)

    return soma / rockets.length
}