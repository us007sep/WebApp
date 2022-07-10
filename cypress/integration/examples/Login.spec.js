/* Normally we have classses and inside classes we have functions
    In Cypress testing we have describe and in describe instead of fucntions we have integration test it*/

describe("Login Page",()=>{
    it("Login is working fine...",()=>{
        cy.intercept({
            method:'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://udaysapp1.web.app");
        cy.get("[id='login']").click();
        cy.get("[name='email']").type("us007sep@gmail.com");
        cy.get("[name='password']").type("Uday07092000!");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include","Home");
        cy.get("[id='profile']").click();
        cy.get("[id='email']").invoke('text').should("include","us007sep@gmail.com");
    }),
    it("Incorrect Login is working testing...",()=>{
        cy.intercept({
            method:'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/getAccountInfo'
        }).as('firebaseApi');
        cy.visit("https://udaysapp1.web.app/Login");
        cy.get("[name='email']").type("us007sep@gmail.com");
        cy.get("[name='password']").type("wrong!");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.get("[id='error']").invoke('text').should("include","invalid");
    })
})

