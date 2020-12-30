/// <reference types="Cypress" />

describe('Registration Suite', () => {
    it('Checkbox', () => {
      cy.visit("http://demo.automationtesting.in/Register.html");
      cy.get("#checkbox1").check().should("be.checked").and('have.value','Cricket')
      cy.get("#checkbox2").check().should("be.checked").and('have.value','Movies')
      cy.get("#checkbox3").check().should("be.checked").and('have.value','Hockey')
      cy.get("#checkbox1").uncheck().should("not.be.checked")
      cy.get("#checkbox2").uncheck().should("not.be.checked")
      cy.get("#checkbox3").uncheck().should("not.be.checked")
      cy.get('[type="checkbox"]').check(['Cricket','Hockey'])
      

      
     
  })
  it('Static Dropdown', () => {
    
    cy.get("#Skills").select('Analytics').should("have.value","Analytics")   
   
})
it('Multiple select Dropdown', () => {
    
    cy.get("#msdd").click()
    cy.get(".ui-corner-all").contains("Czech").click()
    cy.get(".ui-corner-all").contains("Croatian").click()

   
})
it('Searchable dropdown', () => {
    
    cy.get("[role='combobox']").click({force:true})
    cy.get(".select2-search__field").type('bangl')
    cy.get(".select2-search__field").type("{enter}")

   
})

})