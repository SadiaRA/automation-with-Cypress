/// <reference types="Cypress" />
class LoginClass{
    visit(){
    cy.visit("https://admin-demo.nopcommerce.com/");

    }
    fillEmail(email){
      const field=cy.get("#Email")
      field.clear()
      field.type(email)
      return this
    }
    fillPassword(pass){
        cy.get("#Password").type(pass)
        return this
    }
    submit(){
        cy.get("input[type='submit']").click()
    }

    
}
export default LoginClass