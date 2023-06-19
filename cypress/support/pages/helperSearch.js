export function search() {
        cy.get('[id="filter_keyword"]').click().type('E').type('{enter}').then(() => {
          cy.get('[class="contentpanel"]').then(($searchGoods) => {
            if ($searchGoods.text().includes('Fiorella Purple Peep Toes')) {
              cy.contains('Fiorella Purple Peep Toes').click();
            } else if ($searchGoods.length > 0) {
              cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=2"]')
                .contains('2')
                .click();
            } else if ($searchGoods.length >= 0) {
              cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=3"]')
                .contains('3')
                .click();
            } else if ($searchGoods.length > 0) {
              cy.get('[href="https://automationteststore.com/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=4"]')
                .contains('4')
                .click();
            } else {
              cy.get('[class="productname"]').contains('Fiorella Purple Peep Toes').click().should('have.text','Fiorella Purple Peep Toes');
            }
          });
        });
      }

    //   export function findNewProd(productName){
    //     cy.get('ul.pagination a').then( pages => {
    //         for(let i = 1; i < pages.length; i++){
    //             cy.location().then( location => {
    //                 if(!location.search.includes('product/product')){
    //                     cy.get('body').then( body => {
    //                         if(body.find(.prdocutname[title="${productName}"]).length > 0){
    //                             cy.get(.prdocutname[title="${productName}"]).click();
    //                         } else {
    //                             cy.get('ul.pagination a').contains('>').click();
    //                         }
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // }
    // // рекурсія
    // export function findProduct(productName){
    //     cy.get('body').then( body => {
    //         if(body.find(.prdocutname[title="${productName}"]).length > 0){
    //             cy.get(.prdocutname[title="${productName}"]).click();
    //         } else {
    //             cy.get('ul.pagination a').contains('>').click();
    //             findProduct(productName)
    //         }
    //     })
    // }      
        