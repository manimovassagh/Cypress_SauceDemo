import { productHomePage } from "./../pages/ProductHomePage";
import { login } from "../actions/Login";

describe("Test", () => {
  /**
   * @description Visit Homepage amd Login to page
   */
  beforeEach(() => {
    cy.step("Visit Home and Login");
    cy.visit("/");
    login.initLogin();
  });

  it("should show the upper parts of Product page correctly", () => {
    cy.step("Check the Burger menu");
    productHomePage.elements.burgerMenu().should("exist");
  });

  it("click on Burger menu should open a drawer with 4 elements and all must be visible", () => {
    productHomePage.elements.burgerMenu().click();
    cy.get(".bm-menu").should("be.visible");
    cy.get("nav .bm-item").should("contain", "All Items");
    cy.get("nav .bm-item").should("contain", "About");
    cy.get("nav .bm-item").should("contain", "Logout");
    cy.get("nav .bm-item").should("contain", "Reset App State");
    cy.step("Close the Drawer");
    cy.get("#react-burger-cross-btn").as("closeDrawer");
    cy.get("@closeDrawer").click();
    productHomePage.elements.title().should("contain", "Products");
  });

  it("should be able to see shopping card at top", () => {
    productHomePage.elements.shoppingCartLink().should("be.visible");
  });
});
