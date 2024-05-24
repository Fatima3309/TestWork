/// <reference types="cypress" />

describe('Login Tests', function() {
    beforeEach(() => {
        // Log in automatically before each test case
        cy.login('https://staging.ewaiverpro.app/', 'sfkazmi0@gmail.com', 'Pa$$w0rd!');

    });

    it('image upload', () => {
        cy.visit('https://staging.ewaiverpro.app/edoc/testwaiver874')

        cy.clickButtonById('continue-to-events')

        cy.clickButtonByClass('dontevent-click.btn-lg.btn-success')
        cy.wait(1000);

        cy.fillFormFields('John', 'Doe', 'john.doe@example.com');

        cy.get('.sign-btn').click()
        cy.get('#signature').click()
        cy.get('.app-button').click()
        cy.selectCheckbox2()
        //cy.clickButtonById('#submit-btn')
    })
})


        //cy.fill_fields('Ali', 'Raza', 'ali@33gmail.com');

        // Call the custom command to upload the image
      /*
        cy.get('button.app-button.format-btn').click();

        // Attach the image file from the fixtures directory
        cy.get('input[type="file"]').attachFile('ssss.png'); // Replace 'car_img.jpg' with the actual filename

        // Optionally, you can wait for the image to be uploaded and displayed on the page
        // For example, you can check if the image container is visible
        cy.get('.image-container').should('be.visible');*/













