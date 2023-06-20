/// <reference types="cypress"/>
import { requestAuth } from '../support/pages/helperAuthViaRequests'
import {login, findNewProd, findProduct} from '../support/pages/helper'

beforeEach(() => {
    cy.log('Authorization via API');
    requestAuth();
    })
    
    it('Order' ,()=> {
        cy.log('Order');
        cy.visit('https://automationteststore.com/index.php?rt=account/account');
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

