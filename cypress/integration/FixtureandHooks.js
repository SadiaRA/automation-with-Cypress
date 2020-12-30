/// <reference types="Cypress" />

describe("FixtureSuite",()=>{
    before(()=>{
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Fixtureoperation',function(){
      cy.visit("https://admin-demo.nopcommerce.com/");
      cy.get("#Email").type(this.data.email)
      cy.get("#Password").type(this.data.password)
      cy.get("input[type='submit']").click()
      
  })
})