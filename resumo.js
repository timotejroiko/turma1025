
// DOM
// a raiz da pagina
document



// seletores

// encontrar o elemento pelo seu id: <div id="meuid">
document.getElementById("meuid")

// encontrar o elemento pela sua classe: <div class="minhaclasse">
// obs: retorna todos os elementos que contem essa classe
document.getElementsByClassName("minhaclasse")

// encontrar o elemento pelo seu tipo: <div>
// obs: retorna todos os elementos desse tipo
document.getElementsByTagName("div")

// econtrar o elemento usando a syntaxe do CSS: <div classe="abc">
document.querySelector(".abc")

// a mesma coisa, mas retorna todos os elementos encontrados
document.querySelectorAll(".abc")



// obter o conteudo

const elemento = document.querySelector(".abc");

elemento.innerHTML // obtem o HTML interno do elemento como string
elemento.outerHTML // obtem o HTML incluindo ele mesmo como string
elemento.textContent // obtem o conteudo textual, sem a estrutura html
elemento.innerText // obtem o conteudo textual, sem a estrutura html
elemento.value // obtem o conteudo ou valor de um input ou textarea



// navegar entre elementos

elemento.parentElement // navega para o elemento mae
// <div classe="container"> <---------
//    <div classe="elemento"></div>  ^
// </div>

elemento.nextElementSibling // navega para o elemento irmao logo a seguir
// <div classe="container">
//    <div classe="elemento"></div>    v
//    <div classe="outro"></div> <-----
// </div>

elemento.previousElementSibling // navega para o irmao elemento anterior
// <div classe="container">
//    <div classe="outro"></div> <-----
//    <div classe="elemento"></div>   ^
// </div>

elemento.firstElementChild // primeiro elemento contido
// <div classe="elemento">            v
//    <div classe="outro"></div> <-----
//    <div classe="outro2"></div>
// </div>

elemento.lastElementChild // ultimo elemento contido
// <div classe="elemento">            v
//    <div classe="outro"></div>      v
//    <div classe="outro2"></div> <----
// </div>

elemento.children // retorna todos os elementos contidos

// versao "node" da mesma coisa
// um "element" é elemento html, que é um tipo de node
// um "node" pode nao ser html, pode ser texto solto, xml, comentários e outras coisas
elemento.parentNode
elemento.nextSibling
elemento.previousSibling
elemento.firstChild
elemento.lastChild
elemento.childNodes



// atributos
// ex: <elemento atributo1="valor1" atributo2="valor2">

elemento.getAttribute("atributo1") // retorna valor1
elemento.hasAttribute("atributo1") // retorna verdadeiro
elemento.hasAttributes() // retorna verdadeiro se tem atributos
elemento.removeAttribute("atributo1") // remove o atributo
elemento.setAttribute("atributo3", "valor3") // cria um novo atributo
elemento.attributes() // retorna uma lista de atributos



// classes

elemento.classList.add("minhaclasse") // adiciona uma classe
elemento.classList.remove("minhaclasse") // remove uma classe
elemento.classList.contains("minhaclasse") // retorna verdadeiro se o elemento contem a classe
elemento.classList.toggle("minhaclasse") // adiciona a classe se nao existir, remove se existir



// Storage API
// localStorage e sessionStorage

localStorage.getItem("item") // obter item salvo
localStorage.setItem("item", "valor") // salvar item no navegador do usuario
localStorage.removeItem("item") // remover item
localStorage.clear() // remover todos os itens

sessionStorage.x // a mesma coisa, mas só funciona até o usuario fechar a aba



// programação assíncrona
// uma forma de fazer o javascript executar tarefas em segundo plano
// permite executar multiplas tarefas simultaneamente

// quando uma função é assíncrona, significa que o resultado dessa função só poderá ser obtido depois de algum tempo
// não é possível receber o resultado dessa função de forma imediata
// ela joga a tarefa para o segundo plano, e continua a execução do javascript normalmente

// nao é possivel fazer por exemplo:
const resultado = funçãoAssíncrona();


// utilizando callbacks
funçãoAssíncrona(resultado => {
    // aqui dentro é possível acessar o resultado
});
// aqui fora, não é possivel acessar o resultado

// isso aqui tambem não funciona:
let resultado1;
funçãoAssíncrona(resultado => { // <-- foi enviada para o plano de fundo
    resultado1 = resultado; // <-- só é feito depois da tarefa ser concluida
});
// o javascript envia a tarefa para o plano de fundo, e logo em seguida, continua na proxima linha normalmente
console.log(resultado1); // <-- essa linha vai ser executada ANTES da tarefa


// utilizando promessas
// para utilizar uma promessa, é necessário verificar se a função retorna uma "Promise"
fetch() // <-- passa o mouse em cima e vai estar escrito que retorna uma Promise
setTimeout() // <-- não aparece isso, ou seja, não retorna uma Promise, e sim trabalha com callbacks

// trabalhando com promessas
funçãoAssíncrona().then(resultado => { // <-- resultado da função
    // aqui voce pode acessar o resultado
}).catch(erro => { // <-- em caso de erro, podemos acessar o erro aqui
    // isso aqui substitui um try{}catch{}
}); // <-- se uma função que retorna uma Promise da erro, e não tiver um .catch(), o programa vai dar pau
// aqui fora não é possivel acessar o resultado
// pois assim como nos callbacks, a tarefa é enviada para segundo plano
// e até ao resultado chegar, as próximas linhas já vão ter sido executadas

// exemplo que da pra fazer com promessas:
const tarefa1 = funçãoAssíncrona();
const tarefa2 = funçãoAssíncrona();

// gerenciamento de multiplas tarefas usando promessas
Promise.all([tarefa1, tarefa2]).then(asDuasTarefas => {

});
Promise.race([tarefa1, tarefa2]).then(tarefaQueConcluiuPrimeiro => {

});


// utilizando promessas com async/await
// cria um contexto assincrono usando a palavra chave "async" na hora de criar uma funçao
async function conteudoAssincrono() { // <-- função assincrona
    const resultado = await funçãoAssíncrona(); // <-- acessar o resultado diretamente, sem precisar usar o .then()
    console.log(resultado);
}

const fn = async () => { // <-- função flecha assincrona
    const resultado1 = await funçãoAssíncrona(); // <-- primeiro o javascript espera para esse resultado chegar
    const resultado2 = await funçãoAssíncrona(); // <-- somente depois do resultado ter chegado, é que a segunda tarefa é iniciada
    console.log(resultado1, resultado2) // e novamente o javascript espera até a segunda tarefa retornar o resultado, antes de prosseguir para a próxima linha
}

(async () => { // <-- função assincrona auto-executavel
    const tarefa1 = funçãoAssíncrona(); // <-- criar uma tarefa e salvar na variavel
    const tarefa2 = funçãoAssíncrona(); // <-- criar segunda tarefa e tambem salvar na variavel
    const resultados = await Promise.all([tarefa1, tarefa2]); // <-- esperar até as duas tarefas serem concluidas e receber os dois resultados
    console.log(resultados) // <-- as duas tarefas serão executadas simultaneamente
})()




