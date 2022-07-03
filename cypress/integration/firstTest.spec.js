/// <reference types="cypress" />

describe('Our 1st suite', () => {

   
    it('1st test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
        //by tag name
        cy.get('input')

        //id
        cy.get('#inputEmail1')

        //class
        cy.get('.input-full-width')

        //attribute
        cy.get('[placeholder]')

        //attribute name and value
        cy.get('[placeholder="Email"]')

        //class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //tag name & attribute value
        cy.get('input[placeholder="Email"]')

         //2 different attributes
         cy.get('input[placeholder="Email"][fullwidth')

         //tag name, attribute value, id ,class
         cy.get('input[placeholder="Email"]#inputEmail.input-full-width')

         //recommended way
         cy.get('[data-cy=inputEmail1]')

    })

   

})

