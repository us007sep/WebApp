/* Normally we have classses and inside classes we have functions
    In Cypress testing we have describe and in describe instead of fucntions we have integration test it*/

describe("Login Page",()=>{
    it("Login is working fine...",()=>{
        cy.visit("https://udaysapp1.web.app/Login");

    })
})

