describe ('Login Parabank', () => {
    beforeEach(() => {
        cy.url_parabank()
    })

    it('Login Com Sucesso', () => {
        cy.login_parabank('tgois', 'automacao1')
    })

    it('Login Vazio', () => { 
        cy.botao_login()
        cy.get('#rightPanel').should('contain', 'Please enter a username and password.')
    })

    it('Login com usuário incorreto', () => {
        cy.login_parabank('incorreto', 'automacao')
        cy.get('#rightPanel').should('contain', 'The username and password could not be verified.')
    })

    it('Login com senha incorreta', () => {
        cy.login_parabank('tgois', 'incorreto')
        cy.get('#rightPanel').should('contain', 'The username and password could not be verified.')
    })
})
