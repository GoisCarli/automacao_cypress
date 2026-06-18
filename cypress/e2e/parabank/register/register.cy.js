const faker = require('faker-br')
describe ('Register Parabank', () => {
    beforeEach(() => {
        cy.url_parabank()
    })
        // Faker para gerar dados aleatórios

        it('Registro Com Sucesso', () => { 
            const nome = faker.name.firstName()
            const lastName = faker.name.lastName()
            const Street = faker.address.streetName()
            const city = faker.address.city()
            const state = faker.address.state()
            const zipCode = faker.address.zipCode()
            const phoneNumber = faker.phone.phoneNumber()
            const ssn = faker.random.number()
            const username = faker.internet.userName()
            const password = faker.internet.password()
            const repeatedPassword = password



            

            cy.get('#loginPanel > :nth-child(3) > a').click()
            cy.get('[name="customer.firstName"]').type(nome)
            cy.get('[name="customer.lastName"]').type(lastName)
            cy.get('[name="customer.address.street"]').type(Street)
            cy.get('[name="customer.address.city"]').type(city)
            cy.get('[name="customer.address.state"]').type(state)
            cy.get('[name="customer.address.zipCode"]').type(zipCode)
            cy.get('[name="customer.phoneNumber"]').type(phoneNumber)
            cy.get('[name="customer.ssn"]').type(ssn)
            cy.get('[name="customer.username"]').type(username)
            cy.get('[name="customer.password"]').type(password)
            cy.log(password)
            cy.get('[name="repeatedPassword"]').type(repeatedPassword)
            cy.log(repeatedPassword)
            cy.get('[colspan="2"] > .button').click()
            cy.get('#rightPanel').should('contain', 'Your account was created successfully. You are now logged in.')
        })

        // Commands

        it('Registro Com Sucesso', () => { 
            cy.get('#loginPanel > :nth-child(3) > a').click()
            cy.get('[name="customer.firstName"]').type('Thiago')
            cy.get('[name="customer.lastName"]').type('Gois')
            cy.get('[name="customer.address.street"]').type('Rua Teste')
            cy.get('[name="customer.address.city"]').type('Sorocaba')
            cy.get('[name="customer.address.state"]').type('Sao Paulo')
            cy.get('[name="customer.address.zipCode"]').type('111111111')
            cy.get('[name="customer.phoneNumber"]').type('11999999999')
            cy.get('[name="customer.ssn"]').type('0000')
            cy.get('[name="customer.username"]').type('tgois')
            cy.get('[name="customer.password"]').type('teste1')
            cy.get('[name="repeatedPassword"]').type('teste1')
            cy.get('[colspan="2"] > .button').click()
            cy.get('#rightPanel').should('contain', 'Your account was created successfully. You are now logged in.')
        })


        it('Registro Com campo vazio', () => {      
            cy.get('#loginPanel > :nth-child(3) > a').click()
            cy.get('[name="customer.firstName"]').type('Thiago')
            cy.get('[name="customer.address.street"]').type('Rua Teste')
            cy.get('[name="customer.address.city"]').type('Sorocaba')
            cy.get('[name="customer.address.state"]').type('Sao Paulo')
            cy.get('[name="customer.ssn"]').type('0000')
            cy.get('[name="customer.username"]').type('tgois')
            cy.get('[name="customer.password"]').type('teste1')
            cy.get('[name="repeatedPassword"]').type('teste1')
            cy.get('[colspan="2"] > .button').click()
            cy.get(':nth-child(2) > [width="50%"]').should('contain', 'Last name is required.')
            //  cy.contains('Last name is required.')
            cy.get(':nth-child(6) > [width="50%"]').should('contain', 'Zip Code is required.')
            //  cy.contains('Zip Code is required. ')
        })

        it('Registro com usuário existente', () => {
           cy.get('#loginPanel > :nth-child(3) > a').click()
           cy.get('[name="customer.firstName"]').type('Thiago')
           cy.get('[name="customer.lastName"]').type('Gois')
           cy.get('[name="customer.address.street"]').type('Rua Teste')
           cy.get('[name="customer.address.city"]').type('Sorocaba')
           cy.get('[name="customer.address.state"]').type('Sao Paulo')
           cy.get('[name="customer.address.zipCode"]').type('111111111')
           cy.get('[name="customer.phoneNumber"]').type('11999999999')
           cy.get('[name="customer.ssn"]').type('0000')
           cy.get('[name="customer.username"]').type('tgois')
           cy.get('[name="customer.password"]').type('teste1')
           cy.get('[name="repeatedPassword"]').type('teste1')
           cy.get('[colspan="2"] > .button').click()
           cy.get(':nth-child(10) > [width="50%"]').should('contain', 'This username already exists.')    
            
   })    

})      