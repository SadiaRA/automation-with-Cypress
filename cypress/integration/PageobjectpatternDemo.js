/// <reference types="Cypress" />
import LoginClass from './PageObjects/LoginClass'

describe('PageObjPattern', () => {
    it('Login', () => {
     const lp= new LoginClass()
     lp.visit()
     lp.fillEmail('sadia@gmail')
     lp.fillPassword('132243')
     lp.submit()
        
    })

      
  })
