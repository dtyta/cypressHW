export function requestAuth (){
    cy.visit('https://automationteststore.com/index.php?rt=account/account');
    cy.clearAllCookies();
    cy.request('GET', 'https://automationteststore.com/index.php?rt=account/account')
    .then((response) => {
      const body = Cypress.$(response.body); 
      const csrfToken = body.find('input[name="csrftoken"]').val();
      const csrfInstance = body.find('input[name="csrfinstance"]').val();
    
      cy.request({
        method: 'POST',
        url: 'https://automationteststore.com/index.php?rt=account/login',
        form: true,
        body: {
          csrftoken: csrfToken,
          csrfinstance: csrfInstance,
          loginname: 'Tolik1',
          password: '1488WPZZ'
        }}).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.contain('html');
        });
        cy.log(csrfToken);
        cy.log(csrfInstance);
    }
    )}
