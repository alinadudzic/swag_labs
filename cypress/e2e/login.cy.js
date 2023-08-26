describe('login tests', () => {
    const testData = [
        { login: Cypress.env('login'), password: Cypress.env('password') },
        { login: Cypress.env('lockedUser'), password: Cypress.env('password') },
        { login: Cypress.env('problemUser'), password: Cypress.env('password') },
        { login: Cypress.env('glitchUser'), password: Cypress.env('password') },
    ];

    testData.forEach((data) => {
        it(`login test for ${data.login}`, () => {
          cy.visit('/');
          cy.login(data.login, data.password);
          cy.url().should('eq', Cypress.config('baseUrl') + 'inventory.html');
  })
}) 
})