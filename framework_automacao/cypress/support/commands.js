// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/*import user from "../../fixtures/usuario.json"

Cypress.Commands.add("loginApp", () => {
    cy.request({
        method: 'POST',
        url: 'api/auth',
        body:
        {
            email: user[0].email,
            password: user[0].senha
        }
        
    })
})*/

import auth from '../fixtures/auth.json'




Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})
Cypress.Commands.add("login", (email, senha) => {

    cy.visit('login')
    cy.get('[data-test="login-email"]').type(email)
    cy.get('[data-test="login-password"]').type(senha)
    cy.get('[data-test="login-submit"]').click()
})
Cypress.Commands.add('criarPerfil', (cia, site, cidade, skills, github, minibio) => {
    cy.visit('criarPerfil')
    cy.get('#mui-component-select-status').click()
    cy.contains('Especialista em QA').click()
    cy.get('[data-test="profile-company"]').type(cia)
    cy.get('[data-test="profile-webSite"]').type(site)
    cy.get('[data-test="profile-location"]').type(cidade)
    cy.get('[data-test="profile-skills"]').type(skills)
    cy.get('[data-test="profile-gitHub"]').type(github)
    cy.get('[data-test="profile-bio"]').type(minibio)

});

Cypress.Commands.add("tokenJwt", () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
       return response.body.jwt
    })
})

Cypress.Commands.add("criarPostagem", (token, value) => {
    cy.request({
        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookie: token
        },
        body: {
            text: value
        }
    })
    
})

Cypress.Commands.add("criarPerfil", (token, value) => {
    cy.request({
        method: 'POST',
        url: '/api/profile',
        headers: {
            Cookie: token
        },
        body: {
            text: value
        }
    })
    
})

Cypress.Commands.add("criarExperiencia", (token) => {
    cy.request({
        method: 'PUT',
        url: '/api/profile/experience',
        headers: {
            Cookie: token
        },
        body: 
            {
                "title": "QA",
                "company": "VIA",
                "location": "SP",
                "from": "2022-09-08",
                "to": "2022-09-08",
                "current": false,
                "description": "Teste BOOTCAMP"
              }
        
    })
    
})