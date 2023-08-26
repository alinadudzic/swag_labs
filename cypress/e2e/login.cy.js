describe('login tests', () => {
    it('standard user login', () => {
        const login = Cypress.env("login");
        const password = Cypress.env("password")
        cy.visit('/')
      cy.login(login, password)
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })
  })