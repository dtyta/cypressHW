/// <reference types="cypress"/>
import { requestAuth } from '../support/pages/helperAuthViaRequests'
import {login, findNewProd, findProduct} from '../support/pages/helper'

it('Authorization via request', () => {
    cy.log('Authorization via API');
    requestAuth();
    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');
    cy.request('GET', '/index.php?rt=account/account')
    .then( response => {expect(response.status).to.be.equal(200)
        expect(response.body).to.contain('html')});
    
    cy.get('#filter_keyword')
    .type('i')
    .closest("form")
    .submit();
    
    findProduct('Benefit Bella Bamba') 

    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.contentpanel').should('contain', "Thank you for shopping with us!");
    
    
})

