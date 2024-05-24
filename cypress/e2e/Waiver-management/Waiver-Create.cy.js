/// <reference types="cypress" />

describe('Login Tests', function() {
    beforeEach(() => {
        // Log in automatically before each test case
        cy.login('https://staging.ewaiverpro.app/', 'sfkazmi0@gmail.com', 'Pa$$w0rd!');

    });

    /*it('should display an error message for invalid credentials', function() {
        cy.login('invalidusername', 'invalidpassword'); // Call the custom login command with invalid credentials
        // Add assertions to check if the error message is displayed*/


    it('Create waiver', function() {
        // Create waiver
        cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click();
        cy.get('#AddWaiver .et_pb_text_inner h2').click();
        cy.typeDynamicName();// Generate dynamic name and store it in '@dynamicName' alias
        cy.wait(1000); // Wait for 1 second
        cy.clickButtonById('SaveAddWaiver');




        // Type dynamic name into another input field
        cy.get('.form-group #url')
            .click()
            .then(() => {
                cy.get('@dynamicName').then((dynamicName) => {
                    cy.get('.form-group #url').type(dynamicName);
                })
            });
            cy.clickButtonById('verify-url-button').click();
            cy.clickButtonById('save-url-button').click();
        cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click()




        //checkbox selection
        /*cy.get('li.c-sidebar-nav-item.menu-80')
            .find('a[href="https://staging.ewaiverpro.app/data-export"]')
            cy.selectCheckbox('last-of-type')// Select a checkbox with id="checkbox1"
            .last()
            .click();*/



    })

});