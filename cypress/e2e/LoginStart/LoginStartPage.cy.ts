import { loginHomePage } from './../pages/LoginHomePgae';
import { login } from '../actions/Login';


describe('Confirm the Login Flow', () => { 

beforeEach(()=>{
    cy.visit('/')
})
it('Check the input of username ', () => {
    cy.step('Chekc the upper Title happy')
    loginHomePage.elements.upperTitle().should('contain','Swag Labs')
    loginHomePage.elements.upperTitle().should('exist')
    loginHomePage.elements.upperTitle().should('not.be.undefined')
    cy.step('Chekc the upper Title unhappy')
    loginHomePage.elements.upperTitle().should('not.contain','swag labs')
});



it('Should successfully enter username, password and Login ', () => { 
   login.initLogin()
   cy.get('.title').contains('Products')
   cy.step('redirect to product page')
   cy.url().should('contain','https://www.saucedemo.com/inventory.html')
});

})