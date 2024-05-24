/// <reference types="cypress" />

it('displays two todo items by default', () => {
    cy.visit('https://staging.ewaiverpro.app/')

    const problem_user = "sfkazmi0@gmail.com"; // Define and assign a value to secret_sauce
    cy.get('.mb-3 > .form-control').click().type(problem_user)


    const pass = "Pa$$w0rd!"; // Define and assign a value to secret_sauce
    cy.get('.mb-4 > .form-control').click().type(pass);

    cy.get('.col-4 > .btn').click()
    cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click()


    // Click on the delete button
    //cy.get('.et_pb_with_border.et_pb_module.et_pb_text.et_pb_text_2.et_pb_text_align_center.et_pb_bg_layout_light') // Select the parent div containing the elements
    //.last().click()// Select the last occurrence of the parent div
    // .invoke('remove'); // Remove the selected element


    cy.get('.delete-waiver') // Select the delete button
        .last() // If it's the last button you want to target
        .click() // Click on the delete button

    cy.get('a.btn.btn-danger.final-delete').click()
})














