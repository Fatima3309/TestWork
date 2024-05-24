import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Define a function for logging in

// import './commands'
// Define a custom command for selecting an option from a dropdown
Cypress.Commands.add('selectFromDropdown', (selector, optionText) => {
    cy.get('#DateFormat').select(2);
});



//for selecting dropdown of edit page
Cypress.Commands.add('selectFromDropdown', (selector, optionText) => {
    // Click to open the dropdown
    cy.get(selector, { multiple: true }).click();

    // Find and click the desired option
    cy.contains('.el-select-dropdown__item span', optionText).click();
});






// Define a custom command for clicking on buttons based on their ID
Cypress.Commands.add('clickButtonById', (id) => {
    cy.get(`#${id}`).click();

});

//button click by using class
Cypress.Commands.add('clickButtonByClass', (className) => {
    cy.get(`.${className}`).click()
});

//button click by span class
Cypress.Commands.add('clickSpanByClass', (className) => {
    cy.get(`span.${className}`).click();
});




// Define a custom command for selecting a checkbox (Data export module)
Cypress.Commands.add('selectCheckbox', (selector) => {
    cy.get('.list-edoc.row.mt-2.mx-0 input[type="checkbox"]:last-of-type').check();
});

// Define a custom command for selecting a checkbox (Waiver form)
Cypress.Commands.add('selectCheckbox2', (selector) => {
    // Check if the checkbox inner element exists
    cy.get('.el-checkbox__inner').should('exist');

// Alternatively, if you want to interact with the checkbox inner element
    cy.get('.el-checkbox__inner').click();
});





// Define a custom command for generating a dynamic name and typing it into an input field
Cypress.Commands.add('typeDynamicName', () => {
    const uniqueId = Cypress._.uniqueId('waiver');
    const dynamicName = `test${uniqueId}`;
    cy.log('Dynamic name:', dynamicName); // Log the dynamic name
    cy.wrap(dynamicName).as('dynamicName'); // Store the dynamic name in an alias
    cy.wait(1000);
    cy.get('#title.form-control.bg-light').click().type(dynamicName);


});





// cypress/support/commands.js

Cypress.Commands.add('fillFormFields', (firstName, lastName, emailAddress) => {
    // Type text into the first name field
    cy.get('[field_id="first_name"] input[type="text"]').eq(0).type(firstName);

    // Type text into the last name field
    cy.get('[field_id="last_name"] input[type="text"]').eq(0).type(lastName);

    // Type text into the email address field
    cy.get('[field_id="participant_email"] input[type="text"]').eq(0).type(emailAddress);
});
/*(The eq() method is used to filter elements in a collection based on their index. In Cypress, when you use a selector that
 matches multiple elements, Cypress returns a collection of elements, not a single element. For example, if your selector
 matches three input fields, Cypress returns a collection containing these three elements. If you want to interact with a
 specific element in the collection, you can use the eq() method to select it based on its index within the collection.
 In your case, since the selector '[field_id="first_name"] input[type="text"]' is matching multiple input fields
 (perhaps due to multiple forms or other reasons), using eq(0) ensures that you select the first matching input field
 in the collection, allowing you to interact with it individually. If you know there's only one such field on the page,
 using eq(0) is a simple way to ensure you're interacting with the correct one. If there could be multiple fields,
 you may need to adjust the index accordingly to target the specific field you want to interact with.)*/


/// function for edit page
/*Cypress.Commands.add('fillShortTextField', function (label, placeholder) {
    cy.get('.el-overlay-dialog[aria-label="Short Text Field"]').within(() => {
        cy.contains('.short_text_label', 'Label:').next().find('input[type="text"]').type(label);
       cy.contains('.short_text_label', 'Placeholder:').next().find('input[type="text"]').type(placeholder);
         cy.get('input[type="text"]').eq(1).type(label);
            cy.get('input[type="text"]').eq(2).type(placeholder);
         //Click the save button
        cy.get('.el-dialog__body').find('.app-button.format-btn').contains('Save').click();
    });
})*/

Cypress.Commands.add('fillShortTextField', function (label, placeholder) {
    cy.get('.el-overlay-dialog[aria-label="Short Text Field"]').within(() => {
        cy.contains('.short_text_label', 'Label:').then(($label) => {
            cy.log('Found label element:', $label.text());
        });
        cy.contains('.short_text_label', 'Placeholder:').then(($placeholder) => {
            cy.log('Found placeholder element:', $placeholder.text());
        });
        // Now check if you are able to locate the input field and type the label and placeholder
    });
});



