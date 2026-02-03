# README2.md

## Visão Geral
Projeto simples de estudo que consome a API pública Disney Characters e exibe informações de personagens em duas telas: uma página inicial e uma página de busca. O objetivo é praticar consumo de API com JavaScript puro e manipulação de DOM.

## Tecnologias
- HTML
- CSS
- JavaScript (vanilla)
- Tailwind (via CDN do browser)

## Estrutura do Projeto
- `index.html`:
Página inicial com botão para acessar a busca.

- `SearchPage.html`:
Página de busca e exibição de dados de personagens.

- `globals.js`:
Ponto de entrada do JS da página de busca. Lê o input e aciona a lógica de busca.

- `Functions/getInfoData.js`:
Função principal que busca por nome ou ID e preenche a tela.

- `Functions/getIdToLocate.js`:
Busca detalhada por ID ao clicar em um item de lista.

- `globals.css`:
Arquivo de estilos (vazio no momento).

- `tailwind.config.js`:
Configuração padrão do Tailwind.

- `assets/logo.jpg`:
Favicon usado nas páginas.

## Como Funciona
### Página inicial
- `index.html` exibe um botão `Testar Agora` que redireciona para `SearchPage.html`.

### Página de busca
- O usuário digita um **nome** de personagem ou **ID** e clica em `Buscar`.
- A lógica decide se a entrada é texto ou número.

#### Busca por nome
- Faz uma requisição com `name=...` para obter a contagem de resultados.
- Divide os resultados em duas páginas e exibe em duas listas:
  - Lista 01 (esquerda)
  - Lista 02 (direita)
- Cada item é clicável e, ao clicar, carrega os dados detalhados do personagem por ID.

#### Busca por ID
- Faz uma requisição direta para `/character/{id}`.
- Exibe:
  - ID
  - Nome
  - Lista de filmes
  - Lista de jogos
  - Imagem do personagem

## API Utilizada
- Base: `https://api.disneyapi.dev/character`
- Exemplos:
  - Buscar por nome: `?name=Mickey&page=1&pageSize=50`
  - Buscar por ID: `/112` (exemplo)

## Rotas de páginas
- `/` ? `index.html`
- `/search` ? `SearchPage.html`

## Observa��es
- As listas `Lista 01` e `Lista 02` aparecem apenas na busca por nome.
- A pesquisa por ID mostra diretamente filmes e jogos.

## Autor
Desenvolvido por Andreas Sousa.
