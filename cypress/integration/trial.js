/// <reference types="Cypress" />

describe('e2e', () => {
    it('Test1', () => {
      cy.visit("https://www.nopcommerce.com/");
      
      cy.get("body > div.master-wrapper-page > header > div > div.header-links-wrapper > div.header-links > ul > li.usrelinks > a > span.ico-user.sprite-image").click()
      cy.get(".ico-login").click()
  cy.get("#Username").type("sadui")
      cy.get("#Password").type("123")
      cy.get("body > div.master-wrapper-page > section > div > div > div > div > div > div.page-body > div.customer-blocks > div.returning-wrapper.fieldset > form > div.form-fields > div.buttons > input").click()
   cy.get(".message-error").contains("Login was unsuccessful. Please correct the errors and try again.")
  })
})