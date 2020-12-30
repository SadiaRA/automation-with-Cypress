/// <reference types="Cypress" />

describe('table test', () => {
    it('Test1', () => {
      cy.visit("http://testautomationpractice.blogspot.com/");
   //checking if value is present anywhere in the table
   cy.get("table[name='BookTable']").contains('td','Selenium')
   //checking if value present in specific row and column
   cy.get("#HTML1 > div.widget-content > table > tbody > tr:nth-child(3) > td:nth-child(2)").contains('Mukesh').should('be.visible')
//checking and verifying an author with its book name
cy.get("table[name='BookTable']>tbody>tr>td:nth-child(2)").each(($e,i,$l)=>{
    const text=$e.text()
    if(text.includes("Amod")){
        cy.get("table[name='BookTable']>tbody>tr>td:nth-child(1)").eq(i).then((bname)=>{
            const book=bname.text()
            expect(book).to.equal("Master In Java")
        })
    }
})
    })

      
  })

    