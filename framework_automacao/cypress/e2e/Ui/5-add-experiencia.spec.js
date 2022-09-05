/// <reference types="cypress" />
const experienciaPage = require('../../support/Experiencia/experiencia-pages')

describe('US005 - Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.fixture("usuario.json").then((user) => {
            cy.login(user[1].email, user[1].senha)
        })
        cy.visit('adicionar-experiencia')
    });

    it.only ('Deve adicionar uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2022', '01/01/2052', 'ViaHub Bootcamp')
        cy.get('[data-test="experience-delete"]').should('exist')

    });

    it('Deve adicionar uma experiencia Atual com sucesso', () => {
        experienciaPage.addExperienciaAtual('QA', 'Via', 'SP', '01/01/2022', 'ViaHub Bootcamp')
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve excluir uma experiencia com sucesso', () => {
        experienciaPage.addExperiencia('QA', 'Via', 'SP', '01/01/2022', '01/01/2052')
        cy.get('[data-test="experience-delete"]').first().click()
        cy.contains('Experiencia Removida').should('be.visible')
    });
});    

