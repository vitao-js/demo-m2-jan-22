chamarAPI().then(data => {
    data.forEach((rocket) => {
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