/// <reference types="cypress"/>
import { search } from '../support/pages/helperSearch.js';
it('Authorization test', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('[id="customer_menu_top"]').click();
    cy.get('[id="loginFrm_loginname"]').click().type('Tolik1');
    cy.get('[id="loginFrm_password"]').click().type('1488WPZZ');
    cy.get('[title="Login"]').click();
    cy.get('[class="subtext"]').should('have.text', 'Max');
    search();
   
})
