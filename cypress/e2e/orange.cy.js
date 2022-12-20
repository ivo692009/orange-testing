describe("Suit de pruebas para la pagina orange", () => {

    beforeEach(() => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
      })

    it("Suit de pruebas basicas" , () =>{
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('.oxd-autocomplete-text-input > input').type("Charlie  Carter")
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("robamaridos")
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Lala1234!!")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Lala1234!!")

    })



})