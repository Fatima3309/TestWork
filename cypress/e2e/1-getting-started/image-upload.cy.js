/// <reference types="cypress" />

describe('Login Tests', function() {
    it('image upload', () => {
        cy.visit('https://pasteboard.co/')

        cy.get('input[type="file"]').attachFile('ssss.png');

        cy.get('button.confirm').click();

        cy.get('.link.button').click();

        cy.get('a.button.confirm').click();

        cy.get('input.file-upload-text[value="/path/to/my/file.png"]').click();

        cy.get('input[type="file"]').attachFile('car img2 (2).jpg');


    })
})