describe("SignUp",()=>{
    it("SignUp is running",()=>{
        cy.intercept({
            method:'POST',
            pathname: '**/identitytoolkit/v3/relyingparty/signupNewUser'
        }).as('firebaseApi');
        cy.visit("https://udaysapp1.web.app/SignUp");
        cy.get("[name='fname']").type('Test');
        cy.get("[name='lname']").type('Object');
        const unique_email = "cypress"+new Date().getTime()+"@gmail.com";
        cy.get("[name='email']").type(unique_email);
        cy.get("[name='password']").type("Testing");
        cy.get("[type='submit']").click();
        cy.wait('@firebaseApi');
        cy.url().should("include","Home");
    })
})