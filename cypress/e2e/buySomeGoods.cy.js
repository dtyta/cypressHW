describe('Buying some goods ', () => {

    it('Buy goods ', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('[id="customer_menu_top"]').click();
        cy.get('[id="loginFrm_loginname"]').click().type('Tolik1');
        cy.get('[id="loginFrm_password"]').click().type('1488WPZZ');
        cy.get('[title="Login"]').click();
        cy.get('[class="subtext"]').should('have.text', 'Max');      
        cy.get('[name="filter_keyword"]').click().type('Pour Homme Eau de Toilette').type('{enter}');
        cy.get('[class="cart"]').click();
        cy.get('[id="cart_checkout2"]').click();
        cy.get('[title="Confirm Order"]').click();
        cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!');
    })


})