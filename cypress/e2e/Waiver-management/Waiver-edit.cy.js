/// <reference types="cypress" />
describe('Login Tests', function() {
    beforeEach(() => {
        // Log in automatically before each test case
        cy.login('https://staging.ewaiverpro.app/', 'sfkazmi0@gmail.com', 'Pa$$w0rd!');

    });


    it('Edit waiver', function () {
        cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click()
        cy.get('.btn.mx-auto.btn-sm.d-block.btn-success') // Select the delete button
            .last() // If it's the last button you want to target
            .click() // Click on the delete button

        cy.contains('a.app-button', 'Edit').click();

//click waiver builder


        //selecting Date of birth
        cy.get('[section_name="Participant Information"]').within(() => {
            cy.contains('span', '+ Date of Birth').click();
            cy.get('.el-input__inner').then(($input) => {
                console.log($input); // Log the input element to the console
                // Perform the selection
                cy.selectFromDropdown('.el-input__inner', 'dd/mm/yyyy');
            });
        });





        //adding New section
        cy.contains('span', '+ New Section').click();
        //type in field
        cy.get('.el-input').eq(0).find('input[type="text"]').type('Interview');
        //click save button
        cy.get('.el-dialog__body').find('.app-button.format-btn').contains('Save').click();

        //ope short text form of interview section
        cy.get('[section_name=""]').within(() => {
            // Find the element with the class "app-heading-2" containing the text "interview"
            cy.contains('.app-heading-2', 'Interview').parent().parent().parent().parent().within(() => {
                // Click the button with the specific icon for the short text field
                cy.get('button:contains("+ Short Text Field")').click();

                cy.get('.el-overlay-dialog[aria-label="Short Text Field"]').within(() => {
                    cy.get('input[type="text"]').eq(1).type('first_name');
                    cy.get('input[type="text"]').eq(2).type('Enter first_name here');
                    //click save button
                    cy.get('.el-dialog__body').find('.app-button.format-btn').contains('Save').click();
                });


                //add large text box
                // Click the button with the specific icon for the  Large Text Box
                cy.get('button:contains("+ Large Text Box")').click();
                cy.get('.el-overlay-dialog[aria-label="Large Text Box"]').within(() => {
                    cy.get('input[type="text"]').eq(1).type('email_address');
                    cy.get('input[type="text"]').eq(2).type('Enter email_address here');
                    //click save button
                    cy.get('.el-dialog__body').find('.app-button.format-btn').contains('Save').click();
                })
            })

            // Click the "Save Setting" button
            //cy.get('.app-card.mb-3').find('.app-button.format-btn').contains('Save Settings').click();
        })
    })
})







