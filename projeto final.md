# Fazer funcionar o botao de votação no site da casa de eventos

Baixar o repositório da casa de eventos:

[https://github.com/roofranklin/casa-de-eventos](https://github.com/roofranklin/casa-de-eventos)

no final da página, onde diz: Votação para atração musical do Reveillon

De um lado temos a caixa de resultados, do outro lado a caixa de votação

## Criar base de dados

pegar um link de base de dados aqui:

[https://crudcrud.com/](https://crudcrud.com/)

pensar numa estrutra, por exemplo:

`linkdosite/votos`

## Na caixa de resultados

* criar um script na página
* acessar a caixa de resultados pelo document (voce pode criar ids ou classes de necessário)
* fazer um fetch para o link `/votos` da api de base de dados que nós usamos nas aulas
* pegar o resultado do fetch (mesmo que seja vazio)
* substituir o conteudo da caixa de resultados com os valores obtidos da base de dados

## Na caixa de votação

* criar um script na página
* acessar a caixa de votação pelo document
* adicionar um evento de click no botao de votar
* ao click no botao, descobrir qual opção o usuario selecionou
* fazer um fetch para enviar a opção selecionada para a base de dados, utilizando um fetch com o metodo POST
* recarregar a página e ver o resultado atualizado na caixa de resultados