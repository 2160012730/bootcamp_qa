/// <reference types="cypress" />
import usuarios from "../../fixtures/usuario.json"

describe('US0001 - Funcionalidade: Login', () => {
/*
    beforeEach(() => {
        cy.visit('login')
*/
    it('Deve fazer login com sucesso', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('le290308@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')


    });
    it('Deve fazer login com sucesso - Usando importação', () => {
        cy.login(usuarios[0].email, usuarios[0].senha)
        cy.title().should('eq', 'ConexaoQA')
    });
    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture("usuario.json").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.title().should('eq', 'ConexaoQA')
    }); 
});
//});


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