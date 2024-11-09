# Recipe Finder App

## Descrição
Recipe Finder é uma aplicação web baseada em React que permite aos usuários pesquisar receitas, visualizar detalhes das receitas e salvar suas receitas favoritas. Ela fornece uma interface intuitiva para explorar uma vasta coleção de receitas e gerenciar favoritos pessoais.

## Funcionalidades
- Autenticação de usuário (login e registro)
- Navegação de receitas com paginação
- Pesquisa de receitas específicas
- Visualização de informações detalhadas das receitas
- Salvar e gerenciar receitas favoritas
- Design responsivo para vários tamanhos de tela

## Tecnologias Utilizadas
- React 18.3.1
- TypeScript
- React Router 6.26.1
- Axios 1.7.6
- Vite 5.4.1
- CSS para estilização

## Páginas
- Página de Login: Autenticação do usuário
- Página de Registro: Registro de novos usuários
- Página Inicial: Navegar e pesquisar receitas
- Página de Detalhes da Receita: Visualizar informações detalhadas sobre uma receita específica
- Página de Favoritos: Gerenciar receitas salvas como favoritas

## Instruções de Configuração
1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` no diretório raiz
   - Adicione as seguintes variáveis:
     ```
     VITE_API_BASE_URL=<sua_url_base_da_api>
     VITE_BASE_IMAGE_URL=<sua_url_base_de_imagens>
     ```
4. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
5. Abra seu navegador e acesse o endereço do servidor local (geralmente http://localhost:5173)

## Scripts Disponíveis
- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa o ESLint para linting do código
- `npm run preview`: Pré-visualiza a build de produção localmente

## Estrutura do Projeto
- `src/`: Arquivos fonte
  - `components/`: Componentes React reutilizáveis (ex: RecipeCard, FavoriteCheckbox)
  - `pages/`: Componentes de páginas individuais (ex: HomePage, FavoritePage)
  - `routes/`: Configuração de rotas
  - `context/`: Provedores de contexto React (UserContext, FavoritesContext)
  - `hooks/`: Hooks React personalizados (useRecipe, useFavorite, useRecipeSearch)
  - `types/`: Definições de tipos TypeScript

## Autenticação
O aplicativo usa autenticação baseada em token. Após o login bem-sucedido, um token de usuário é armazenado no localStorage e usado para requisições subsequentes à API.

## Integração com API
Esta aplicação se integra com uma API de receitas para buscar dados de receitas. A URL base para a API deve ser definida no arquivo `.env` como `VITE_API_BASE_URL`. As imagens das receitas são buscadas usando a variável de ambiente `VITE_BASE_IMAGE_URL`.

## Gerenciamento de Estado
O aplicativo usa o Context do React (UserContext e FavoritesContext) para gerenciamento de estado global, permitindo fácil acesso aos dados do usuário e receitas favoritas em todos os componentes.

## Contribuindo
Contribuições para o Recipe Finder App são bem-vindas. Por favor, certifique-se de seguir o estilo de código existente e adicionar testes unitários para qualquer nova funcionalidade ou mudança.

## Repositório do back-end
https://github.com/Josieljcc/recipe-app-full-stack.git
