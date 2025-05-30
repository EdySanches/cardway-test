# Teste Cardway
Teste técnico admissional para o cargo de Desevolvedor Backend Pleno na Cardway.

## Pré-requisitos
- [Java JDK](https://adoptium.net/) (versão 17 ou superior)
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)
- [Next.js](https://nextjs.org/) - Pode ser instalado via npm:
  ```bash
  npm install next@latest
  ```

## Como Executar os Códigos
- **Arquivos Java pré-compilados (`.class`)**:  
  Execute utilizando o Java no terminal:
  ```bash
  java NomeDoArquivo
  ```
  > *Obs.: Não inclua a extensão `.class` ao rodar o comando acima.*

- **Arquivos JavaScript (`.js`)**:  
  Execute utilizando o Node.js no terminal:
  ```bash
  node nome-do-arquivo.js
  ```

- **Projeto Next.js**:  
  Para executar o projeto React com Next.js, primeiro instale as dependências e depois execute o servidor de desenvolvimento:
  ```bash
  cd react/react-challenges
  npm install
  npm run dev
  ```
  O projeto estará disponível em `http://localhost:3000`

Certifique-se de estar no diretório onde o arquivo está localizado antes de executar os comandos.

## Desafios
### Desafio 1 - Algoritmos: Ordenação Personalizada
#### Caminho do arquivo
`js/challenge-1.js`

### Desafio 2 - Algoritmos: Substring Palíndroma
#### Caminho do arquivo
`js/challenge-2.js`

### Desafio 3 - Algoritmos: Implementar um Debounce
#### Caminho do arquivo
`js/challenge-3.js`

### Desafio 4 - Algoritmos: Redução Personalizada
#### Caminho do arquivo
`js/challenge-4.js`
#### Notas
- Tendo em vista a ambiguidade presente no enunciado, na descrição sobre o "um campo específico", foram implementadas duas versões:
  1. Genérica: Implementação que recebe o nome do campo a ser acumulado, aberto ao usuário.
  2. Específica: Implementação que considera o exemplo do enunciado, o campo 'price'.

### Desafio 5 - React: Estado com Hook Personalizado
#### Caminho do projeto
`react/react-challenges/`
#### Caminho do arquivo do Hook
`react/react-challenges/src/hooks/useFetch.ts`
#### Notas
- O mesmo projeto em React contém os desafios 5 e 6.
- O Hook personalizado `useFetch` é utilizado no componente `ProfilePage` em `profile/page.tsx` para o download de imagens de avatar dos usuários.

### Desafio 6 - React: Context API
#### Caminho do projeto
`react/react-challenges/`
#### Caminho do arquivo do Context
`react/react-challenges/src/contexts/AuthContext.tsx`
#### Notas
- O mesmo projeto em React contém os desafios 5 e 6.
- O Context é utilizado em toda aplicação, e mais especificamente no componente `LoginPage` em `login/page.tsx` para Login e no componente `ProfilePage` em `profile/page.tsx` para obter dados do usuário e realizar Logout.

### Desafio 10 - Javascript: Fibonacci com Memoization
#### Caminho do arquivo
`js/challenge-10.js`
