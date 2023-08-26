Cypress.Commands.add("login", (login, logPassword) => {
    cy.get('#user-name').type(login);
    cy.get('#password').type(logPassword)
    cy.get('#login-button').click();
})