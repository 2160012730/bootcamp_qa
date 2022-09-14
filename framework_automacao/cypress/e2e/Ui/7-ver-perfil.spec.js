/// <reference types="cypress" />
//import mockPerfil from "../../fixtures/profile.json"

describe('Funcionalidade: Visualização dos perfis', () => {
    beforeEach(() => {
        cy.visit('perfis')
        cy.intercept({
            method: 'GET',
            url: 'api/profile'
        },{
            statusCode:200,
            fixture: "profile"
        }
        )  
        cy.reload()
    });
    
    it.only('Validar o primeiro item da lista', () => {
        cy.get('[data-test="profile-name"]').first().should('contain', 'Leandro Martins')
    });

    it('Validar lista vazia', () => {
        cy.intercept('api/profile', { statusCode:500})
        cy.reload()
        cy.get('[data-test="profiles-noProfiles"]').should('contain, "Nenhum perfil encontrado')
    });

    it('Validar o ultimo item da lista', () => {
        cy.get('[data-test="profile-name"]').last().should('contain', 'Roberto Carlos')
    });

    it('Validar o terceiro item da lista', () => {
        cy.get('[data-test="profile-name"]').eq().should('contain', 'Ana da Silva')
    });
})