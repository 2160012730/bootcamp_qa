/// <reference types="cypress" />

describe('US002 - Funcionalidade: Cadastro', () => {

beforeEach(() => {//Faz o visit antes de cada cenário
        cy.visit('cadastrar')
    });
    
    
    it('Deve fazer cadastro  com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Leandro')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type('le290308@via.com')
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('290308Le')
        cy.get('[data-test="register-submit"]').click()

        //resultado esperado
       // cy.get('.large').should ('contains','Dashboard')
        //cy.get('[data-test="dashboard-createProfile"]').should('exit')
    });
});    


    

/*
    antes de tudo
    before

    antes de cada  cenário
    beforeEach

    depois de tudo
    after

    depois de cada cenário
    */