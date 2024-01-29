// salvar formulario de contato no localStorage

const textarea = document.querySelector("form textarea");

const valorsalvo = localStorage.getItem("texto");

textarea.value = valorsalvo;

textarea.addEventListener("input", () => {
    const valor = textarea.value;
    localStorage.setItem("texto", valor);
});