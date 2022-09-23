/// <reference types="cypress" />
const experienciaPage = require('../../support/Experiencia/experiencia-pages')

describe('US005 - Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.fixture("usuario.json").then((user) => {
            cy.login(user[0].email, user[0].senha)
            //cy.loginApp()
            //cy.visit(adicionar-experiencia)
        })
        cy.visit('adicionar-experiencia')
    });
    it('Acessar experiencia', () => {
        cy.log (2+2)
    });
    it('Deve adicionar uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2022', '01/01/2052', 'ViaHub Bootcamp')
        cy.get('[data-test="experience-delete"]').should('exist')

    });

    it('Deve adicionar uma experiencia Atual com sucesso', () => {
        experienciaPage.addExperienciaAtual('QA', 'Via', 'SP', '01/01/2022', 'ViaHub Bootcamp')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve excluir uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2022', '01/01/2052', 'ViaHub Bootcamp')
        cy.get('[data-test="experience-delete"]').first().click()
        //cy.contains('Experiencia Removida').should('be.visible')
    });
});    

