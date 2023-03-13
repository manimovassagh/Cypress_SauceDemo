import { loginHomePage } from "../pages/LoginHomePgae"

export  class Login{

    initLogin(){
        loginHomePage.elements.userNameInput().type("standard_user")
        loginHomePage.elements.passwordInput().type("secret_sauce")
        loginHomePage.elements.loginButton().click()
    }
}


export const login= new Login()