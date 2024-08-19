/// <reference types="cypress" />

describe("Test Contact Us form via WebDriverUni", () => {
  it("Should be able to successful submission via contact us form", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    //Add name
    cy.get('[name="first_name"]').type('Roger'),
    //Add last name
    cy.get('[name="last_name"]').type('Paiva'),
    //Add email
    cy.get('[name="email"]').type('rogerp@mailinator.com'),
    //Add comments
    cy.get('textarea.feedback-input').type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    //Add click submit
    cy.get('[type="submit"]').click()
  });
});

