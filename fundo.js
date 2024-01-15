item1
const resultado = document.getElementById("resultado");
() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(resposta => {
        return resposta.json();
    }).then(json => {
        resultado.innerHTML = `
            Nome: ${json.name}<br>
            Altura: ${json.height}<br>
            Peso: ${json.weight}
        `
    });
}


item2
const resultado = document.getElementById("resultado");
resposta => {
    return resposta.json();
}).then(json => {
    resultado.innerHTML = `
        Nome: ${json.name}<br>
        Altura: ${json.height}<br>
        Peso: ${json.weight}
    `
}



item3
const resultado = document.getElementById("resultado");
json => {
    resultado.innerHTML = `
        Nome: ${json.name}<br>
        Altura: ${json.height}<br>
        Peso: ${json.weight}
    `
}