
// DOM (document object model)
// a raiz da pagina
// permite o javascript interagir com o html
// especifico dos navegadores
document



// seletores

// encontrar o elemento pelo seu id: <div id="meuid">
document.getElementById("meuid")

// encontrar o elemento pela sua classe: <div class="minhaclasse">
// obs: retorna todos os elementos que contem essa classe
document.getElementsByClassName("minhaclasse")

// encontrar o elemento pelo seu tipo: <div> <p> <h1>
// obs: retorna todos os elementos desse tipo
document.getElementsByTagName("h1")

// econtrar o elemento usando a syntaxe do CSS: <div classe="abc">
// #id .classe
// <div id="meuid">
//     <p classe="abc">
//         <span classe="xyz"></span> <-- primeiro encontrado
//         <span classe="xyz"></span>
//     </p>
// </div>
document.querySelector("#meuid .abc .xyz") // retorna apenas o primeiro

// a mesma coisa, mas retorna todos os elementos encontrados
// <div id="meuid">
//     <p classe="abc">
//         <span classe="xyz"></span>
//         <span classe="xyz"></span>
//         <span classe="xyz"></span>
//     </p>
// </div>
document.querySelectorAll("#meuid .abc .xyz") // retorna todos



// obter o conteudo de um elemento HTML
// <p class="abc">texto que está dentro do parágrafo</p>

const elemento = document.querySelector(".abc");

elemento.innerHTML // obtem o HTML interno do elemento como string
elemento.outerHTML // obtem o HTML incluindo ele mesmo como string
elemento.textContent // obtem o conteudo textual, sem a estrutura html
elemento.innerText // obtem o conteudo textual, sem a estrutura html
elemento.value // obtem o conteudo ou valor de um input, select, ou textarea



// navegar entre elementos

elemento.parentElement // navega para o elemento mae
// <div classe="container"> <---------
//    <div classe="elemento"></div>  ^
// </div>

elemento.nextElementSibling // navega para o elemento irmao logo a seguir
// <div classe="container">
//    <div classe="elemento"></div>   v
//    <div classe="outro"></div> <-----
// </div>

elemento.previousElementSibling // navega para o irmao elemento anterior
// <div classe="container">
//    <div classe="outro"></div> <-----
//    <div classe="elemento"></div>   ^
// </div>

elemento.firstElementChild // primeiro elemento descendente
// <div classe="elemento">            v
//    <div classe="outro"></div> <-----
//    <div classe="outro2"></div>
// </div>

elemento.lastElementChild // ultimo elemento descendente
// <div classe="elemento">            v
//    <div classe="outro"></div>      v
//    <div classe="outro2"></div> <----
// </div>

elemento.children // retorna todos os elementos descendentes
// <div classe="elemento">            v
//    <div classe="outro"></div>  <----
//    <div classe="outro2"></div> <----
// </div>

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
// <div class="classe1 classe2 classe3"></div>
elemento.classList.add("minhaclasse") // adiciona uma classe
elemento.classList.remove("minhaclasse") // remove uma classe
elemento.classList.contains("minhaclasse") // retorna verdadeiro se o elemento contem a classe
elemento.classList.toggle("minhaclasse") // adiciona a classe se nao existir, remove se existir



// criação, atribuição, edição e remoção de elementos no html
// <div class="elemento"></div>
elemento.innerHTML = "<div>novo html</div>"
elemento.outerHTML = '<div class="elemento"><div>novo html</div></div>'
elemento.textContent = "novo html"
elemento.innerText = "novo html"
elemento.value = "novo valor"
// <div></div>
const novo = document.createElement("div") // criar um novo elemento, desconectado da página
elemento.appendChild(novo) // inserir o elemento criado, no final do elemento selecionado
novo.remove() // remove o elemento da página



// Storage API
// localStorage e sessionStorage
// permite salvar dados no navegador do usuario
// os dados salvos ficam associados ao site que está aberto
// eles so existem nesse site, nao vao estar disponiveis em outros sites
// pode ser utilizado por exemplo para salvar formularios para que o usuario nao precise repeti-los
// caso ele saia da pagina e volte mais tarde

localStorage.getItem("item") // obter item salvo
localStorage.setItem("item", "valor") // salvar item no navegador do usuario
localStorage.removeItem("item") // remover item
localStorage.clear() // remover todos os itens

sessionStorage.x // a mesma coisa, mas só funciona até o usuario fechar a aba



// Fetch API
// fetch
// baseado em programação assincrona, veja mais abaixo
// permite acessar conteudo remoto da internet
// por exemplo outros sites e/ou apis remotas
// desde que o conteudo esteja disponivel para ser acessado por um site
// existe uma diferença entre acessar um link como usuario e como site
// o fetch acessa links como site e não como usuario
const promessa = fetch("https://www.meusite.com/minhapagina.html"); // fetch sempre retorna uma promessa (Promise)
// acessar o conteudo da promessa com await
const valordapromessa = await promessa; // só functiona em um contexto async
// acessar o conteudo da promessa com .then()
promessa.then(valordapromessa => {

});

// um objeto Response (resposta de um fetch)
valordapromessa // o objeto Response contem informações sobre o status da conexão
valordapromessa.status // código do status da pagina
valordapromessa.statusText // texto associado ao status da pagina
valordapromessa.text() // baixar o conteudo como texto
valordapromessa.json() // baixar o conteudo como json
valordapromessa.blob() // baixar o conteudo como blob (para conteudo binario)
valordapromessa.arrayBuffer() // baixar o conteudo como buffer (para conteudo binario)

// para baixar o conteudo da página, precisamos utilizar um dos métodos de baixar
const outrapromessa = valordapromessa.text(); // baixar conteudo da pagina também retorna uma promessa (Promise)
// usando await (só funciona dentro de um contexto async)
const valordaoutrapromessa = await outrapromessa;
// usando .then()
outrapromessa.then(valordaoutrapromessa => {

});
valordaoutrapromessa // contem o valor baixado da página

// exemplo de fetch com objeto de configuração
fetch("https://www.meusite.com/minhapagina.html", {
    method: "POST",
    body: "abc",
    headers: {
        "algumcabeçalho": "xyz"
    }
});



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
