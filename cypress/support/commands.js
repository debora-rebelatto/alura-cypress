// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getByData", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});