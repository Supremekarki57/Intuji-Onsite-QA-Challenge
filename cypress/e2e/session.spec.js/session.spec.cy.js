const name = "supreme";
const email = "super@yopmail.com";
const password = "Admin@123";
const firstname = "supreme";
const lastname = "karki";
const company = "Intiju";
const address = "sanepa";
const state = "bagmati";
const city = "lalitpur";
const zipcode = 44600;
const number = 98000000;

describe("template spec", () => {
  it("passes", () => {
    cy.viewport(1440, 900);
    cy.visit("https://automationexercise.com/");

    cy.wait(1000);
    cy.get(".shop-menu > .nav > :nth-child(4)").click();

    //login
    cy.get('[data-qa="login-email"]').should("be.visible").type(email);
    cy.get('[data-qa="login-password"]').should("be.visible").type(password);
    cy.get('[data-qa="login-button"]').click();
    cy.wait(500);

    //logout
    cy.contains("Logout").should("contain", "Logout").click();

    //login with same credientials
    cy.get('[data-qa="login-email"]').should("be.visible").type(email);
    cy.get('[data-qa="login-password"]').should("be.visible").type(password);
    cy.get('[data-qa="login-button"]').click();
    cy.wait(500);
  });
});
