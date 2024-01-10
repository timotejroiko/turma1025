
const barra = document.getElementById("barradepesquisa");
const filmes = document.getElementsByClassName("item");

barra.addEventListener("input", () => {
    const conteudo = barra.value.toLowerCase();
    for(const filme of filmes) {
        const nome = filme.textContent.toLowerCase();
        if(!nome.includes(conteudo)) {
            filme.classList.add("oculto");
        } else {
            filme.classList.remove("oculto");
        }
    }
})

const botao = document.getElementById("haha");
botao.addEventListener("click", () => {
    for(const filme of filmes) {
        filme.classList.toggle("vermelho")
    }
})

// outras possibilidades
// botao.addEventListener("dblclick", listener)
// botao.addEventListener("mousedown", listener)
// botao.addEventListener("mouseup", listener)


// outras possibilidades
// barra.addEventListener("keypress", () => {
//     console.log("evento keypress foi emitido")
// })

// barra.addEventListener("keydown", () => {
//     console.log("evento keydown foi emitido")
// })

// barra.addEventListener("keyup", () => {
//     console.log("evento keyup foi emitido")
// })

// barra.addEventListener("change", () => {
//     console.log("evento change foi emitido")
// })