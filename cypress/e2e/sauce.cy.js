describe('login',()=>{
    beforeEach(()=>{
       cy.visit_login()
    })
    it('deve realizar o login', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.url_inicial()
    })
    it.only('login inválido', ()=>{
        cy.login('standard','secret_sauce')
        cy.modal_erro().should('contain','password do not match any user')
    })
    it('Realizar o logout', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.wait(5000)
        cy.botao_hamburguer()
        cy.wait(5000)
        cy.link_logout()
    })
    it('Adicionar backpack no carrinho', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack()
    })
    it('Visualizar o carrinho', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
    })
    it('botao comprar', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
        cy.botao_comprar()
    })
    it('informacoes pessoais', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
        cy.botao_comprar()
        cy.primeiro_nome('Thiago')
        cy.ultimo_nome('Carli')
        cy.codigo_postal('18086763')
    })
    it('botao continuar', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
        cy.botao_comprar()
        cy.primeiro_nome('Thiago')
        cy.ultimo_nome('Carli')
        cy.codigo_postal('18086763')
        cy.botao_continuar()
    })
    it('botao finalizar', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
        cy.botao_comprar()
        cy.primeiro_nome('Thiago')
        cy.ultimo_nome('Carli')
        cy.codigo_postal('18086763')
        cy.botao_continuar()
        cy.botao_finalizar()
    })

    it('botao voltar para a tela inicial', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.add_packpack() 
        cy.carrinho_de_compras()
        cy.botao_comprar()
        cy.primeiro_nome('Thiago')
        cy.ultimo_nome('Carli')
        cy.codigo_postal('18086763')
        cy.botao_continuar()
        cy.botao_finalizar()
        cy.botao_voltar_para_a_tela_inicial()
    })

    it('deve realizar o login', ()=>{
        cy.login('standard_user','secret_sauce')
        cy.url_inicial()
    })


})