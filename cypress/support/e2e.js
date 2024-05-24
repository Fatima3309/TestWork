// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "allure-cypress/commands";
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})


// Define a custom command for login
Cypress.Commands.add('login', (url, username, password) => {
    cy.visit('https://staging.ewaiverpro.app/')
        .then(() => {
            cy.get('.mb-3 > .form-control').type(username); // Use the provided username parameter
            cy.get('[name="password"]').type(password); // Use the provided password parameter
            cy.get('button[type="submit"]').click(); // Click on the login button
        });
});



/*Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
    cy.get('button.app-button.format-btn').then(subject => {
        cy.fixture('car img2 (2).jpg', 'base64').then(content => {
            const el = subject[0];
            const testFile = new File([content], 'car img2 (2).jpg', { type: 'image/jpg' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
        });
    });
});*/


// Define a custom command for login
Cypress.Commands.add('autologin', (url,login_btn, username, password) => {
    cy.visit('https://staging.automobiliard.com/')
        cy.get('#login-link').click()
        .then(() => {
            cy.get('[name="email"]').first()
                .should('have.attr', 'placeholder', 'Enter Email Address')
                .wait(1000)
                .type(username); // Use the provided username parameter


            cy.get('[name="password"]').first().type(password); // Use the provided password parameter
            cy.get('.text-center').contains('Login').click();
             // Click on the login button
        });
});
