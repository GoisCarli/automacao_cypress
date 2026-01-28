// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visit_login',()=>{
    cy.visit('/')
})

Cypress.Commands.add('usuario',(var_usuario)=>{
    cy.get('[data-test="username"]').type(var_usuario)
})

Cypress.Commands.add('senha',(var_senha)=>{
    cy.get('[data-test="password"]').type(var_senha)
})

Cypress.Commands.add('botao_login',()=>{
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('url_inicial',()=>{
    cy.url().should('include','/inventory.html')
})

Cypress.Commands.add('modal_erro',()=>{
    cy.get('[data-test="error"]')
})

Cypress.Commands.add('botao_hamburguer',()=>{
    cy.get('#react-burger-menu-btn'). click()
})

Cypress.Commands.add('link_logout',()=>{
    cy.get('[data-test="logout-sidebar-link"]').click({force: true})
})

Cypress.Commands.add('add_packpack',()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
})

Cypress.Commands.add('carrinho_de_compras',()=>{
    cy.get('[data-test="shopping-cart-link"]').click()
})

Cypress.Commands.add('botao_comprar',()=>{
    cy.get('[data-test="checkout"]').click()
})

Cypress.Commands.add('primeiro_nome',(var_primeiro_nome)=>{
    cy.get('[data-test="firstName"]').type(var_primeiro_nome)
})

Cypress.Commands.add('ultimo_nome',(var_ultimo_nome)=>{
    cy.get('[data-test="lastName"]').type(var_ultimo_nome)
})

Cypress.Commands.add('codigo_postal',(var_codigo_postal)=>{
    cy.get('[data-test="postalCode"]').type(var_codigo_postal)
})

Cypress.Commands.add('botao_continuar',()=>{
    cy.get('[data-test="continue"]').click()
})        

Cypress.Commands.add('botao_finalizar',()=>{
    cy.get('[data-test="finish"]').click()
})     

Cypress.Commands.add('botao_voltar_para_a_tela_inicial',()=>{
    cy.get('[data-test="back-to-products"]').click()
})   

Cypress.Commands.add('login',(var_usuario, var_senha)=>{
    cy.usuario(var_usuario)
    cy.senha(var_senha)
    cy.botao_login()
})   

