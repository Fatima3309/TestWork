/// <reference types="cypress" />
describe('Login Tests', function() {
    beforeEach(() => {
        // Log in automatically before each test case
        cy.login('https://staging.ewaiverpro.app/', 'sfkazmi0@gmail.com', 'Pa$$w0rd!');

    });

    it('dropdown selection', function () {


        //dropdown selection
        cy.get('li.c-sidebar-nav-item.menu-70')
            .find('a[href="https://staging.ewaiverpro.app/basic-config"]')
            .click();

        // Usage of the custom command to select an option from a dropdown
        cy.selectFromDropdown('#DateFormat', 1);

        //  waiver
        cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click();


        //count number of waivers
        let totalCount;
        cy.get('.panel-body').each(($waiver) => {
            // For each waiver, assert that it contains the edit button
            cy.wrap($waiver).find('.btn.btn-success').should('exist')
            .then((value) => {
                totalCount = Cypress.$(value).length;
                expect(value).to.have.length(totalCount);
            })
        })


    })
});