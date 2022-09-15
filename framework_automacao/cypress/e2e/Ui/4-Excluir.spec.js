/// <reference types="cypress" />

describe('US004 - Funcionalidade: Excluir', () => {

    //beforeEach(() => {
       // cy.visit('login')

    it('Deve fazer login com sucesso', () => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('le290308@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="login-submit"]').click()
        //cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        cy.get('[data-test="dashboard-deleteProfile"]').click()


    });
});
//});
