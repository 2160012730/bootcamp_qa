/// <reference types="cypress" />
const formacaoPages = require('../../support/Experiencia/formacao-pages');

describe('US006 - Funcionalidade: Adicionar formação', () => {

    beforeEach(() => {
        cy.fixture("usuario.json").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
    });

    it('Deve adicionar uma formacao com sucesso', () => {
        formacaoPages.addExperiencia ('CLEMENTE', '2 GRAU', 'ENSINO FUNDAMENTAL', '01/01/1995', '31/12/1998', 'CURSO NORMAL')
        cy.get('[data-test="education-delete"]').should('exist')

    });

    it('Deve adicionar uma formacao Atual com sucesso', () => {
        formacaoPages.addExperienciaAtual('FIAP', 'SUPERIOR', 'TEC PROCESSAMENTO DE DADOS', '01/01/2000', 'FACULDADE DE TECNOLOGIA')
        cy.get('[data-test="education-delete"]').should('exist')
    });

    it('Deve excluir uma formacao com sucesso', () => {
        formacaoPages.addExperiencia ('CLEMENTE', '2 GRAU', 'ENSINO FUNDAMENTAL', '01/01/1995', '31/12/1998', 'CURSO NORMAL')
        cy.get('[data-test="education-delete"]').first().click()
       // cy.contains('Formacao Removida').should('be.visible')
    });
});    