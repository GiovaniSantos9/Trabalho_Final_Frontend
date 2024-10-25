# Aplicação de Receita Culinária 🍽️

Esta é uma aplicação simples de busca de receitas culinárias que utiliza a [TheMealDB API](https://www.themealdb.com/) para permitir que os usuários pesquisem receitas por nome ou ingrediente, salvem suas receitas favoritas e visualizem os detalhes completos de cada receita em um modal.

---

## Funcionalidades

- **Busca por receitas**: Os usuários podem buscar receitas usando o nome de um prato.
- **Visualização de detalhes da receita**: Ao clicar em uma receita, o modal é aberto com detalhes sobre a receita, incluindo os ingredientes e o modo de preparo.

---

## Tecnologias Utilizadas

- **React.js**: A aplicação é construída utilizando o framework React para gerenciar o estado da aplicação e a interface do usuário.
- **TheMealDB API**: Utilizamos a API pública [TheMealDB](https://www.themealdb.com/) para obter dados sobre receitas.
- **CSS**: Para o estilo dos componentes e a personalização da interface.

---

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação em sua máquina local:

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **npm**: Gerenciador de pacotes para instalar as dependências do projeto.

### Passos:

1. Clone o repositório:
    ```bash
    git clone https://github.com/GiovaniSantos9/Trabalho_Final_Frontend.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projetoFinalFront
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

---

## Funcionalidades e Componentes

### Header

O componente `Header` contém uma barra de pesquisa que permite que os usuários pesquisem receitas. Ele usa `props` para receber a função que lida com a pesquisa e repassa os dados para o componente principal.

### RecipeSearch

Esse componente é responsável por:
- Gerenciar o estado da pesquisa.
- Exibir os resultados da pesquisa.
- Controlar a exibição do modal ao clicar em uma receita.

### Modal

Este componente exibe os detalhes da receita, como os ingredientes, medidas, e instruções de preparo. Ele é exibido quando o usuário clica em uma receita nos resultados da busca ou em uma receita favorita.

---

## Como Usar

- **Pesquisar receitas**: Use a barra de pesquisa no topo da página para buscar receitas pelo nome ou por um ingrediente.
- **Ver detalhes de uma receita**: Clique em qualquer receita nos resultados da busca para abrir o modal com os detalhes completos da receita.

---

## Melhorias Futuras

- **Favoritar receitas**: Clique no ícone de coração para salvar uma receita nos favoritos. A lista de favoritos pode ser visualizada a qualquer momento e é salva localmente.
- **Remover dos favoritos**: Dentro da seção de favoritos, clique no ícone de coração novamente para remover a receita.

---

## Licença

Este projeto foi feito pelo Giovani Dos Santos.


