/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () => {

    //beforeEach{() => {
     //   cy.visit('login')

    it('Deve fazer login com sucesso', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('le290308@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')


    });
});


/*
   Funcionalidade: Login
   Eu como usuário das conexões QA
   Quero fazer o login
   Para editar meu perfil

   Cenario: Login com sucesso
   Arrange - Dado - Pré requisito -> Dado que eu esteja na tela de login
   Action - Quando - Ação do usuário -> Quando eu inserir usuário e senha
   Assert - Então - Resultado esperado - > Então deve me direcionar para o Dash board

   Cenario: validar msg de erro

   Cenario: Recuparar senha*/