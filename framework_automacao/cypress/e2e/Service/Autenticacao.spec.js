/// <reference types="cypress" />

import auth from '../../fixtures/auth.json'

it('[POST] - Teste de autenticação', () => {
    cy.request({
        method: 'POST',
        url: 'https://conexaoqa.herokuapp.com/api/auth',
        body: auth
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies('conexaoqa.herokuapp.com').should('exist')
        //console.log(response.body)
        //cy.log(response.body)
    })
});

it('[POST] - Teste de autenticação com usuario invalido', () => {
    cy.request({
        method: 'POST',
        url: 'https://conexaoqa.herokuapp.com/api/auth',
        failOnStatusCode: false,
        body: {
            "email": "le300308@gmail.com",
            "password": "290308"
        }
    }).then((response) => {
        expect(response.status).to.eq(401)
       
    })
});