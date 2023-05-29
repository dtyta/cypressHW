describe('Registration and Authorization test', () => {
    it('Registration test', () => {
      cy.visit('https://automationteststore.com/');
      cy.get('[id="customer_menu_top"]').click();
      cy.get('[class="fa fa-check fa"]').click();
      cy.get('[id="AccountFrm_firstname"]').click().type('Max');
      cy.get('[id="AccountFrm_lastname"]').click().type('Power');
      cy.get('[id="AccountFrm_email"]').click().type('maxpower@powers.com');
      cy.get('[id="AccountFrm_telephone"]').click().type('0800500605');
      cy.get('[id="AccountFrm_fax"]').click().type('55369877');
      cy.get('[id="AccountFrm_company"]').click().type('PowerRangers');
      cy.get('[id="AccountFrm_address_1"]').click().type('Baker street 221B');
      cy.get('[id="AccountFrm_address_2"]').click().type('  ');
      cy.get('[id="AccountFrm_city"]').click().type('Mexico');
      cy.get('[name="country_id"]').select('Mexico');
      cy.get('[id="AccountFrm_postcode"]').click().type('9875320');
      cy.get('[name="zone_id"]').select('Chihuahua');
      cy.get('[id="AccountFrm_loginname"]').click().type('Tolik1');
      cy.get('[id="AccountFrm_password"]').click().type('1488WPZZ');
      cy.get('[id="AccountFrm_confirm"]').click().type('1488WPZZ');
      cy.get('[id="AccountFrm_newsletter0"]').click();
      cy.get('[type="checkbox"]').click();
      cy.get('[class="btn btn-orange pull-right lock-on-click"]').click();
    })

      it('Authorization test', () => {
      cy.visit('https://automationteststore.com/');
      cy.get('[id="customer_menu_top"]').click();
      cy.get('[id="loginFrm_loginname"]').click().type('Tolik1');
      cy.get('[id="loginFrm_password"]').click().type('1488WPZZ');
      cy.get('[title="Login"]').click();
      cy.get('[class="subtext"]').should('have.text', 'Max');  
    })
  })