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

    cy.get('[data-qa="signup-name"]').should("be.visible").type(name);
    cy.get('[data-qa="signup-email"]').should("be.visible").type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.wait(500);
    // account information
    cy.get("#id_gender1").click();
    cy.get('[data-qa="password"]').should("be.visible").type(password);
    cy.get('[data-qa="days"]').select(4);
    cy.get('[data-qa="months"]').select(9);
    cy.get('[data-qa="years"]').select(22);

    /// Address information
    cy.get('[data-qa="first_name"]').should("be.visible").type(firstname);
    cy.get('[data-qa="last_name"]').should("be.visible").type(lastname);
    cy.get('[data-qa="company"]').should("be.visible").type(company);
    cy.get('[data-qa="address"]').should("be.visible").type(address);
    cy.get('[data-qa="state"]').should("be.visible").type(state);
    cy.get('[data-qa="city"]').should("be.visible").type(city);
    cy.get('[data-qa="zipcode"]').should("be.visible").type(zipcode);
    cy.get('[data-qa="mobile_number"]').should("be.visible").type(number);
    cy.get('[data-qa="create-account"]').click();

    // account created
    cy.get('[data-qa="continue-button"]').click();

    // verify account
    cy.get(":nth-child(10) > a").should("contain", "Logged in as supreme");
  });
});
