
document // a raiz da pagina

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

// versao node dos mesmos atributos
elemento.parentNode
elemento.nextSibling
elemento.previousSibling
elemento.firstChild
elemento.lastChild
elemento.childNodes

// atributos
// <elemento atributo1="valor1" atributo2="valor2">

elemento.getAttribute("atributo1") // retorna valor1
elemento.hasAttribute("atributo1") // retorna verdadeiro
elemento.hasAttributes() // retorna verdadeiro se tem atributos
elemento.removeAttribute("atributo1") // remove o atributo
elemento.setAttribute("atributo3", "valor3") // cria um novo atributo
elemento.attributes() // retorna uma lista de atributos


// classList

elemento.classList.add("minhaclasse") // adiciona uma classe
elemento.classList.remove("minhaclasse") // remove uma classe
elemento.classList.contains("minhaclasse") // retorna verdadeiro se o elemento contem a classe
elemento.classList.toggle("minhaclasse") // adiciona a classe se nao existir, remove se existir