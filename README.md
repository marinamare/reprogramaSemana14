# Reprograma + Porto Digital - Mulheres em Inovação, Negócios e Artes (MINAs)

## reprogramaSemana14

## atividadeSemana14 :books: :green_book:
//
### :memo: Briefing 

Depois de aprender sobre como integrar nosso servidor local ao banco de dados MongoDB com o auxílio da dependência mongoose, utilizada como interface de aplicação do NodeJS ao Mongo o exercício da semana 14 foi pegar uma aplicação feita anteriormente ao aprendizado em banco de dados e estabelecer uma relação entre essa API e um banco de dados. No meu caso, escolhi a aplicação desenvolvida para as semanas 9 e 10 a qual consiste em um sistema de gerenciamento voltado a uma livraria.

#### Funcionalidades relativas aos livros :book: 

- [x] Possibilidade de **vizualização de todos os livros cadastrados** através da rota "http://localhost:8080/livros";
- [x] Filtro de **visualização de livros por id** através da rota "http://localhost:8080/livros/id", substituindo a palavra *id* pelo número de identificação do livro desejado; 
[] Filtro que permite a visualização de **livros por categoria** através da rota "http://localhost:8080/livros?categoria=nomeDaCategoria"; 
- [x] Função de adição de novo livro operando com auxílio do método http **POST** através da rota "http://localhost/livros/"; 
- [x] Método http **DELETE** integrado à API, possibilitando a exclusão de livros registrados, tomando como parâmetro seu ID; 
- [x] Possibilidade de executar *modificações parciais ou totais* no registro de uma colaboradora dada a integração dos métodos **PUT** API;

#### Funcionalidades relativas às colaboradoras :information_desk_person:

- [] Possibilidade de **vizualização de todas as colaboradoras cadastradas** através da rota "http://localhost:8080/equipe";
- [] Filtro de **visualização de colaboradoras por id** através da rota "http://localhost:8080/equipe/id", substituindo a palavra *id* pelo número de identificação do livro desejado; 
- [] Filtro que permite a visualização da **idade de uma colaboradora** através do input de seu ID; 
- [] Função de adição de nova colaboradora operando com auxílio do método http **POST**; 
- [] Método http **DELETE** integrado à API, possibilitando a exclusão de colaboradoras registradas, tomando como parâmetro seu ID; 
- [] Possibilidade de executar *modificações parciais ou totais* no registro de uma colaboradora dada a integração dos métodos **PUT** e **PATCH** à API;

### :notebook: É possível encontrar nesse repositório: 

- [x] 1 servidor funcional; 
- [x] A arquitetura MVC adaptada, sem a pasta de view; 
- [x] Utilização dos métodos https *GET, POST, DELETE e PUT.*
- [x] API integrada a um banco de dados MongoDB chamado livraria, havendo uma coleção de livros e uma coleção de equipe, sendo que apenas a de livros está com os métodos citados implementados.
