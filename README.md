<h1 align="center">
  <img src="https://i.imgur.com/RABlBpk.png"
  width="200px"
  alt="Logo" />
</h1>

<h3 align="center">
  Seletivo ZBRA Frontend
</h3>

<p align="center">
  :video_camera: Aplicação utilizando React, Vite e TypeScript.
  Testes de unidade com Vitest
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/deyvisonborges/react-zbra-seletivo?color=00A83A">

  <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/deyvisonborges/react-zbra-seletivo?color=00A83A">

  <a href="https://deyvisonborges.com.br/">
    <img alt="Made by Deyvison Borges" src="https://img.shields.io/badge/made%20by-Deyvison%20Borges-00A83A">
  </a>

</p>

<p align="center">
  <a href="#computer-demo">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#wrench-install-and-run">Instalação e execução</a>&nbsp;&nbsp;&nbsp;
</p>

## :computer: Demonstração

<p align="center">
  <img src="https://i.imgur.com/4fVyUK2.png" alt="Demo" />
</p>

## :wrench: Instalação e execução

Em seu terminal:

```sh
# Clone este repositório
git clone https://github.com/deyvisonborges/react-zbra-seletivo

# Entre na pasta
cd react-zbra-seletivo

# Instale as dependências com npm
npm install

# Inicie a aplicação com npm
npm run dev 

# Pra executar os testes
npm run test
```

## Descrição da solução
**Na construção da aplicação:**
- Utilizei o **React**
- Utilizei o **CSS** tradicional
- Utilizei o **Vite.js** como ferramenta de toolings
- Utilizei **Typescript** para garantir qualidade de código
- Adicionei ferramentas de testes estáticos como Prettier e Eslint
- Adicionei o **Husky** e o **Lint Staged** para garantir que os commits só vão ser aceitos se o código estiver validado localmente
 
**Na definição de estilos:**
- Normalizei o css de forma exunta para atender o projeto
- Defini as cores do tema como variáveis css
- Criei estilizações no modelo css functions, tanto para os componentes quanto na estruturação
- Adicionei suporte a dois tipos de tipografia
  - Uma para os titulos
  - Outra para os textos corridos (parágrafos)

  As fonts são inseridas via embeded link pelo Google Fonts (solução mais rápida e prática)

**Na validação dos inputs e submissão dos dados:**
- Invés de instalar uma biblioteca de validação de formulários, construi uma solução do zero baseada em hooks, para atender a demanda solicitada.

Com essa abordagem é possível ter total controle sobre a validação enquanto digita e enquanto submete os dados.
- Criei "sanitizers" para os inpunts:
  - No input de nome exemplo, só é permitido, enquanto digita, passar caracteres e não números.
  - No input de senha, enquanto digita, passar somente números.
- Criei funções para validar os dados de acordo com cada requisito solicitado
- Para cada input, de forma isolada, é possível adicionar novas regras de validação, assim como remover alguma já existente, isso sem afertar em nada no código como um todo
---

<p align="center">
Developed with 🧡 by <a href="https://www.linkedin.com/in/deyvisonborges">Deyvison Borges</a>
</p>
