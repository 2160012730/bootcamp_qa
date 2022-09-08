/// <reference types="cypress" />

//import auth from '../../fixtures/auth.json'
describe('Teste de Criação de Perfil',() => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })


    it('[POST] Criar um perfil', () => {
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: {
                Cookie: token
            },
            body: {
                "text": "Postagem pelo Cypress",
                "status": "QA",
                "skills": "Qualidade"
            }
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    });

describe('Teste de selecionar Perfil',() => {

    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })
        
    it('[GET] Selecionar um Perfil', () => {
        cy.request({
            method: 'GET',
            url: 'api/profile/me',
            headers: {
                Cookie: token
            }
                   
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
describe('Teste de Adicionar Experiencia',() => {

    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })
        
    it('[PUT] Adicionar Experiência', () => {
        cy.criarPostagem(token, "PostagemID").then((response) =>{
            let id = response.body._id
            cy.request({
                method: 'PUT',
                url: 'api/profile/experience',
                headers: {
                    Cookie: token
                },
                body: {
                    "title": "QA",
                    "company": "VIA",
                    "location": "SP",
                    "from": "2022-09-08",
                    "to": "2022-09-08",
                    "current": false,
                    "description": "Teste BOOTCAMP"

                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                //expect(response.body.msg).to.eq("Postagem Curtida")
            })
        })
    })
});  
describe('Teste de Exclusão de Experiência',() => {

    let token
    beforeEach(() => {
        cy.tokenJwt().then((auth) => {
            token = auth
        })
    })
    
    it('[DELETE] Excluir uma Experiência', () => {
        cy.criarExperiencia(token).then((response) =>{
            let id = response.body.experience[0]._id
            cy.request({
                method: 'DELETE',
                url: `api/profile/experience/${id}`,
                headers: {
                    Cookie: token
                }
    
            }).then((response) => {
                expect(response.status).to.eq(200)
                //expect(response.body.msg).to.eq("Experiencia removido")
            })
        })
    })

})