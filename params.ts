export const homePageSelectors = {
    searchCatalaogInputField: "input[type='text']",
    clothesButton: "#category-3",
    searchResults: "a.product-thumbnail img",
    signInButton: "a[title='Log in to your customer account']"
}

export const accountPageSelectors = {
    emailField: "input[type='email']",
    passwordField: "input[type='password']",
    signInButton: "button#submit-login",
    signOutButton: "a.logout",
    createNewAccountLink:"div.no-account",
    createAccount: {
        socialTitleButton:"input[name='id_gender'][value='1']",
        firstNameField:"input[name='firstname']",
        lastNameField:"input[name='lastname']",
        emailField:"input[name='email']",
        passwordField:"input[name='password']",
        DOBField:"input[name='birthday']",
        signUpForNewsletterButton:"input[name='newsletter']",
        saveButton:"button.btn[type='submit']"
    }

}


