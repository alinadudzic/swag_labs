describe('login tests', () => {
    const testData = [
      { login: Cypress.env('login'), password: Cypress.env('password') },
      { login: Cypress.env('problemUser'), password: Cypress.env('password') },
      { login: Cypress.env('glitchUser'), password: Cypress.env('password') },
    ];
  
    testData.forEach((data, index) => {
      it(`product listing tests for ${data.login}`, () => {
        cy.visit('/');
        cy.login(data.login, data.password);
        cy.get('div.inventory_item').should('have.length', 6);
        cy.get('div.inventory_item_name').should('have.length', 6);
        cy.get('div.inventory_item_desc').should('have.length', 6);
        cy.get('div.inventory_item_price').should('have.length', 6);
        cy.get('img.inventory_item_img').should('have.length', 6);
        cy.get('button:contains("ADD TO CART")').should('have.length', 6);
      });
  
      it(`product listing tests - sort by name A to Z for ${data.login}`, () => {
        cy.get('.product_sort_container').select('az');
        cy.get('.inventory_item_name')
          .invoke('text')
          .then(text => {
            const textArray = text.split('\n'); 
            const sortedTextArray = textArray.slice().sort();
            const sortedText = sortedTextArray.join('\n'); 
            expect(text).to.equal(sortedText);
          });
      });
  
      it(`product listing tests - sort by name Z to A for ${data.login}`, () => {
        cy.get('.product_sort_container').select('za');
        cy.get('.inventory_item_name')
          .invoke('text')
          .then(text => {
            const textArray = text.split('\n'); 
            const sortedTextArray = textArray.slice().sort((a, b) => b.localeCompare(a));
            const sortedText = sortedTextArray.join('\n'); 
            expect(text).to.equal(sortedText);
          });
      });
  
      it(`product listing tests - sort by price low to high for ${data.login}`, () => {
        cy.get('.product_sort_container').select('lohi');
        cy.get('.inventory_item_price')
          .invoke('text')
          .then(priceText => {
            const priceArray = priceText.split('\n'); 
            const numericPrices = priceArray.map(price => parseFloat(price.replace('$', ''))); 
            const sortedPrices = [...numericPrices].sort((a, b) => a - b); 
            const formattedSortedPrices = sortedPrices.map(price => `$${price.toFixed(2)}`); 
            expect(numericPrices).to.deep.equal(sortedPrices);
          });
      });
  
      it(`product listing tests - sort by price high to low for ${data.login}`, () => {
        cy.get('.product_sort_container').select('hilo');
        cy.get('.inventory_item_price')
          .invoke('text')
          .then(priceText => {
            const priceArray = priceText.split('\n'); 
            const numericPrices = priceArray.map(price => parseFloat(price.replace('$', ''))); 
            const sortedPrices = [...numericPrices].sort((a, b) => b - a); 
            const formattedSortedPrices = sortedPrices.map(price => `$${price.toFixed(2)}`); 
            expect(numericPrices).to.deep.equal(sortedPrices);
          });
      });
    });
  });
  