/// <reference types="cypress" />

describe('automobilia', () => {
    it('login', () => {
        cy.autologin('https://staging.automobiliard.com/', '#login-link', 'test222@gmail.com{enter}', '12345678')

        cy.get('a[href="https://staging.automobiliard.com/user-ad-posting"]').click()

        cy.get('.col-12.mt-3 > .radio-tile').should('be.visible').click()
        cy.get('#nextButton').click()

        cy.get('#select2-make-container').select(2);



    })


})