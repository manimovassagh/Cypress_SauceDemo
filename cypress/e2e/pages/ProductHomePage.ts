class ProductHomePage {
  elements = {
    burgerMenu: () => cy.get("#react-burger-menu-btn"),
    title: () => cy.get(".title"),
    shoppingCartLink: () => cy.get(".shopping_cart_link"),
  };
}

export const productHomePage = new ProductHomePage();
