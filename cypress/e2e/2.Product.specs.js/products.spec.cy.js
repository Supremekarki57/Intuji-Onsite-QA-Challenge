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

    //product

    // cy.get(".shop-menu > .nav > :nth-child(2)").click();
    // // cy.contains("WOMEN");
    // cy.get(
    //   ":nth-child(1) > .panel-heading > .panel-title > .collapsed > .badge > .fa"
    // )
    //   .wait(200)
    //   .click();
    // cy.contains("DRESS");

    //product details
    cy.contains("View Product").click();
    cy.get(":nth-child(5) > span").should("contain", "500");
    cy.get(".product-information > h2").should("contain", "Blue Top");
    cy.get(".product-information > :nth-child(6)").should(
      "contain",
      "Availability: In Stock"
    );
    cy.get(".product-information > :nth-child(7)").should("contain", "New");
    cy.get(".product-information > :nth-child(8)").should("contain", "Polo");
  });
});
