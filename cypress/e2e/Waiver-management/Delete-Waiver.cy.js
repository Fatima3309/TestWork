/// <reference types="cypress" />
describe('Login Tests', function() {
    beforeEach(() => {
        // Log in automatically before each test case
        cy.login('https://staging.ewaiverpro.app/', 'sfkazmi0@gmail.com', 'Pa$$w0rd!');

    });

    it('Delete waiver', function () {
        cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click()
        cy.get('.delete-waiver') // Select the delete button
            .last() // If it's the last button you want to target
            .click() // Click on the delete button
        cy.get('a.btn.btn-danger.final-delete').click()



    })
})