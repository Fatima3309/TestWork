/// <reference types="cypress" />


    describe('example to-do app', () => {
        it('displays two todo items by default', () => {
            cy.visit('http://ecommerce.test.k6.io//');
            //cy.get('[data-test="username"]');
            cy.get('.post-24 > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click()
                cy.get('.woocommerce-product-gallery__trigger').click()
            cy.get('.pswp__button--close').click()
            cy.get('.single_add_to_cart_button').click()

             })


    })
