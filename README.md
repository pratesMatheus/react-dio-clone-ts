# reactjs-dio-clone-ts

## Configuração de Ambiente React
- Instalações necessárias:
  - Visual Studio Code;
  - NodeJS e NPM;
  - Yarn;
  - React DevTools;
  - Extensões para VSCode;

# Fundamentos do TypeScript
Vamos aprender um pouco a respeito do TypeScript e porque devemos usar em nosso projeto. Vamos começar a chamar de TS daqui pra frente...

## O que é o TypeScript
Ts é um superset do JS, ou seja, um conjunto de ferramentas e formas eficientes de escrever códigos JS (JavaScript), adicionando recursos que não estão presentes de maneira nativa na linguagem. Não é um concorrente, mas um auxiliar/complemento para trabalhar com o JS. 

O TS começou a ser desenvolvido pela Microsoft em 2012, com objetivo de adicionar recursos e ferramentas que não estão presentes na linguagem JS (ou que apenas seriam mais dificeis de serem implementados), como: a tipagem estática e orientação a objetos de forma nativa. O TS veio para melhorar a qualidade do código e por consequência o produto final.

**NOTA**: O TS é usado em ambiente de desenvolvimento e não de produção.

## OS benefícios do TS
Por que usar o TypeScript? 

O TS nos traz diversos benefícios, mas podemos destacar o potencial de detecção de erros durante o desenvolvimento de projetos e a possibilidade de incluir a inteligência da IDE que está sendo usada. Isso reflete em um ambiente muito mais ágil e seguro enquanto o código está sendo digitado pelo usuário.

Além de ser uma linguagem fortemente tipada, trazendo vários conceitos de orientação a objetos, como: classes, heranças, encapsulamento, interfaces

## Conceitos básicos do TS
### Tipagem estática
É deixar claro que tipo de dado cada variável está recebendo e isso é super importante, e validações como essas geram melhor qualidade de código e no produto final, além da segurança também

````TS
const nome: string = 'Matheus';
const idade: number = 18;
const userAtivo: boolean = true;
````

### Inferência de tipos
Quando uma variável já está definida como um tipo, isso vai inferir na próxima vez que a variável for usada, tendo a inferência de tipos, não precisando declarar o tipo da variável novamente...
````TS
const nome = 'Matheus';
const idade = 18;
const userAtivo = true;
````
### Interfaces
Interfaces descrevem como um objeto deve se parecer. É quando queremos tipar um objeto, definindo os tipos do mesmo e usando os mesmos dentro do objeto criado. Aqui, os itens são obrigatórios em um objeto. Vamos dizer que as interfaces são abertas, mas tem os tipos fechados (que não podem ser alterados).

````TS
interface IUsuario {
  nome: string;
  idade: number;
  userAtivo: boolean;
}

const usuario: IUsuario = {
  nome: 'Matheus',
  idade: 18,
  userAtivo: true
}
````

### Type
É similar as interfaces, porém, vamos resumir a isso aqui:
- Interfaces podem herdar outras interfaces, types não.
- types pode assumir formatos distintos.

````TS
type IUsuario = {
  nome: string;
  idade: number;
  userAtivo?: boolean;
}

const usuario: IUsuario = {
  nome: 'Matheus',
  idade: 18,
  userAtivo: true
}
````
### Enum
Enum serve para declarar um conjunto de valores/constantes pré-definidos
É muito bom e prático também. Vamos supor que a nossa aplicação tem a opção de cargo de desenvolvedor, com diversas outras opções de cargo. Imaginemos agora que cada pessoa venha escrever o dito cargo de um jeito diferente, pois é, ficaria bem complicado mesmo... Os enums vêm para resolver e centralizar tudo isso e organizar melhor sua regra de negócio...

````TS
enum CARGO {
  DEVELOPER = 'Desenvolvedor'
}

const usuario = {
  nome: 'Matheus',
  cargo: CARGO.DEVELOPER
}
````

# Convertendo o Projeto para TS
Até aqui, construímos um projeto simples usando React com JS, mas vamos agora converter para TS. Vamos para o terminal e digitar:
````
yarn add typescript @types/node @types/react @types/react-dom @types/jest -D
````
A flag `-D` indica que vamos usar tudo o que foi passado para instalar via terminal como ambiente de desenvolvimento.

Para iniciar em TS, usamos o seguinte comando no terminal:
````
npx tsc --init
npm i --save-dev @types/styled-components
````
Isso vai gerar o arquivo: `tsconfig.json`