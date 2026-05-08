1 - Criar pasta em qualquer area do seu computador

2 - Abrir o VSCode e abrir a pasta criada

✅ Pré-requisitos

Antes de tudo, confirme se você tem:

Node.js (LTS)
👉 Recomendo versão 18 ou 20 LTS

Verifique:

node -v
npm -v


Se não tiver:

https://nodejs.org
 (baixar versão LTS)

📁 1. Criar o projeto
mkdir projeto-cypress
cd projeto-cypress

PULAR PRA CA APOS CRIAR A PASTA.

Inicialize o projeto:

npm init -y


Isso cria o package.json.

📦 2. Instalar o Cypress
npm install cypress --save-dev


✔️ O Cypress será instalado como dependência de desenvolvimento.

🚀 3. Abrir o Cypress pela primeira vez
npx cypress open


Na primeira execução o Cypress vai:

Baixar os binários

Abrir a interface gráfica

🧭 4. Configuração inicial no Cypress UI

Quando a tela abrir:

Escolha E2E Testing

Clique em Continue

Selecione o navegador (Chrome é o mais comum)

Clique em Start E2E Testing

O Cypress vai criar automaticamente a estrutura:

cypress/
 ├─ e2e/ <- Criar essa pasta
   ├─seutest.cy.js
 ├─ fixtures/
 ├─ support/
 │   ├─ commands.js
 │   └─ e2e.js
cypress.config.js

⚙️ 5. Arquivo de configuração (cypress.config.js)

Exemplo básico (já no padrão atual do Cypress):

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sua-url-aqui.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true
  }
})

🧪 6. Criar seu primeiro teste

Dentro de:

cypress/e2e/


Crie um arquivo:

login.cy.js


Exemplo de teste:

describe('Login', () => {
  it('Deve acessar a página inicial', () => {
    cy.visit('/')
    cy.title().should('not.be.empty')
  })
})
