/// <reference types="cypress" />

describe('US003 - Funcionalidade: Criar perfil', () => {
    beforeEach(() => {
        cy.visit('login')
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('le290308@gmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')

        //cy.login('le290308@gmail.com', '290308Le')
        cy.get('[data-test="dashboard-createProfile"]').click()
    });
it('Deve criar perfil com sucesso', () => {
    //cy.visit('criar perfil')
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-6"]').click()
    //cy.get('#mui-component-select-status').type('QAE Sênior').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('ConexãoQA')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://conexaoqa.herokuapp.com/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('São Paulo, SP')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('2160012730')
    cy.get('[rows="1"]').type('Conhecimento de automação')
    cy.get('[data-test="profile-submit"]').click()
});

});


