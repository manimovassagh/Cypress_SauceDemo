export class LoginHomePage {

  elements = {
    upperTitle: () => cy.get(".login_logo"),
    userNameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
  };


}

export const loginHomePage = new LoginHomePage()