Cypress.Commands.add('url_parabank',()=>{ 
    cy.visit('https://parabank.parasoft.com')        
})

Cypress.Commands.add('username',(username)=>{
    cy.get('[name="username"]').type(username)
})

Cypress.Commands.add('password',(password)=>{
    cy.get('[name="password"]').type(password)
})

Cypress.Commands.add('botao_login',()=>{
    cy.get(':nth-child(5) > .button').click()
})


Cypress.Commands.add('login_parabank',(username, password)=>{
    cy.username(username)
    cy.password(password)
    cy.botao_login()
})
