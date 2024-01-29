const pesquisa = document.querySelector("#pesquisa");
const resultados = pesquisa.querySelector(".votos");

const botaodevotacao = pesquisa.querySelector(".btn-form");
const estiloselecionado = pesquisa.querySelector(".estilo");

const url = "https://crudcrud.com/api/1eb77d5861724707a2b10acef4042cdc/votos";

obterVotos();

// exemplo de estrutura que vai estar la
// []
// [{ _id: ..., nome: "abc" }, { _id: ..., nome: "xyz" }, { _id: ..., nome: "harry potter" }, { _id: ..., nome: "sauron" }]



botaodevotacao.addEventListener("click", async () => {
    const valor = estiloselecionado.value;
    // por exemplo {"voto":"Rock"}
    const json = JSON.stringify({ // JSON API
        voto: valor
    });
    // console.log(json);
    const resultado = await fetch(url, {
        method: "POST",
        body: json,
        headers: {
            "Content-Type": "application/json" // MIME type
        }
    });

    obterVotos();
});


function obterVotos() {
    fetch(url).then(resultado => {
        resultado.json().then(conteudo => {
            const votostotais = conteudo.length;
            resultados.innerHTML = `<h3>Votos Totais: ${votostotais}</h3>`
            // exemplo de contagem
            const totais = {};
            for(const item of conteudo) {
                const nome = item.voto;
                if(totais[nome]) {
                    totais[nome] += 1
                } else {
                    totais[nome] = 1
                }
            }
            const array = Object.entries(totais) // [["Rock", 3], ["Samba", 2], ["Pagode", 1]]
            array.sort((item1, item2) => {
                return item2[1] - item1[1];
            });
            for(const item of array) {
                // ["Rock", 3]
                const percentagem = item[1] * 100 / votostotais;
                // 11 -> 100
                // 5 -> ?

                resultados.innerHTML += `<p>${item[0]}: ${item[1]} (${percentagem.toFixed(2)}%)</p>`;
            }
        })
    });
}