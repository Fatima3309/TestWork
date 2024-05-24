/// <reference types="cypress" />

it('displays two todo items by default', () => {
    cy.visit('https://staging.ewaiverpro.app/')

    const problem_user = "john@ewaiverpro.com"; // Define and assign a value to secret_sauce
    cy.get('.mb-3 > .form-control').click().type(problem_user)


    const pass = "5lchLnustetReS"; // Define and assign a value to secret_sauce
    cy.get('.mb-4 > .form-control').click().type(pass);

    cy.get('.col-4 > .btn').click()

    cy.get('.menu-70 > .c-sidebar-nav-link').click()
    // Add a wait to ensure the dropdown is fully loaded
    //cy.wait(1000) // Adjust the wait time as necessary

    cy.get('#DateFormat').select(1)

    //cy.get('.c-avatar').click();
    cy.get('img.c-avatar-img[src="https://staging.ewaiverpro.app/assets/img/avatars/6.jpg"]').click();
    //cy.get('[class="dropdown-item"][href="https://staging.ewaiverpro.app/change-location/169"]').invoke('removeAttr', 'target').click()
    cy.get('a[href="https://staging.ewaiverpro.app/change-location/169"]').invoke('removeAttr', 'target').click()

    cy.get('a[href="https://staging.ewaiverpro.app/edoc-admin"]').click()
    cy.get('#AddWaiver .et_pb_text_inner h2').click()

    const uniqueId = Cypress._.uniqueId('waiver');
    const dynamicName = `test${uniqueId}`;
    cy.get('#title.form-control.bg-light').click().type(dynamicName)
    cy.get('.modal-footer #SaveAddWaiver').click()

    // Assert that the value of the #title input field matches the dynamicName
   //cy.get('#title').invoke('val').should('contain', dynamicName);


    cy.get('.form-group #url').click().type(dynamicName)
    cy.get('.form-group #verify-url-button').click()
    cy.get('.form-group #save-url-button').click()

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














