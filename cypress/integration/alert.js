/// <reference types="Cypress" />
//somethibgs need to change as the website changed

describe('Alert', () => {
    it('Test1', () => {
      cy.visit("https://mail.rediff.com/cgi-bin/login.cgi");
      cy.get("input[type='submit']").click()
      cy.on('window:alert',(str)=>{
        expect(str).to.equal('Please enter a valid user name')
    })

      
  })
})
      