// @ts-nocheck

const p = document.querySelector("p");
const i = document.querySelector("input");

const botao1 = document.querySelector("#inc");
botao1.addEventListener("click", () => {
    const conteudo = p.textContent;
    const valor = i.value;
    p.textContent = verificaSmiley(conteudo) - Number(valor);
});

const botao2 = document.querySelector("#dec");
botao2.addEventListener("click", () => {
    const conteudo = p.textContent;
    const valor = i.value;
    p.textContent = verificaSmiley(conteudo) - Number(valor);
});

const botao3 = document.getElementById("mul");
botao3.onclick = () => {
    const conteudo = p.textContent;
    const valor = i.value;
    p.textContent = verificaSmiley(conteudo) * Number(valor);
}

const botao4 = document.querySelector("#div");
botao4.addEventListener("click", () => {
    const conteudo = p.textContent;
    const valor = i.value;
    p.textContent = verificaSmiley(conteudo) / Number(valor);
});

const botao5 = document.querySelector("#pot");
botao5.addEventListener("click", () => {
    const conteudo = p.textContent;
    const valor = i.value;
    p.textContent = verificaSmiley(conteudo) ** Number(valor);
});

const botao6 = document.querySelector("#smile");
botao6.addEventListener("click", () => {
    const conteudo = p.textContent;
    p.textContent = verificaSmiley(conteudo) + ":)";
});

const botao7 = document.querySelector("#style");
botao7.addEventListener("click", () => {
    p.style.color = "red";
    p.style.fontWeight = "bold";
});

const botao8 = document.querySelector("#destyle");
botao8.addEventListener("click", () => {
    p.removeAttribute("style");
});

function verificaSmiley(conteudo) {
    if(conteudo.includes(":)")) {
        const substituido = conteudo.replace(":)", "");
        return Number(substituido);
    } else {
        return Number(conteudo);
    }
}
