describe("SignUp",()=>{
    it("SignUp is running",()=>{
        cy.intercept({
            method:'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/signupNewUser'
        }).as('firebaseApi');
        cy.visit("https://udaysapp1.web.app");
        cy.get("[id='signup']").click();
        cy.get("[name='fname']").type('Test');
        cy.get("[name='lname']").type('Object');
        const unique_email = "cypress"+new Date().getTime()+"@gmail.com";
        cy.get("[name='email']").type(unique_email);
        cy.get("[name='password']").type("Testing");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include","Home");
        cy.get("[id='profile']").click();
        cy.get("[id='email']").invoke('text').should("include",unique_email);
        cy.get("[id='signout']").click();
    }),
    it("Inavlid Signup test is running",()=>{
        cy.intercept({
            method:'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/signupNewUser'
        }).as('firebaseApi');
        cy.visit("https://udaysapp1.web.app");
        cy.get("[id='signup']").click();
        cy.get("[name='fname']").type('Test');
        cy.get("[name='lname']").type('Object');
        cy.get("[name='email']").type('us007sep@gmail.com');
        cy.get("[name='password']").type("Test");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.get("[id='error']").invoke('text').should('not.be.empty');
    })
})