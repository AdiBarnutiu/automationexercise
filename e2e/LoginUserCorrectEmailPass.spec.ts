import {test, expect} from '@playwright/test';
import { log } from 'console';

/*Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible*/


test('create valid user', async({page}) => {
    await page.goto("https://www.automationexercise.com/")
   
    const consentButton = page.getByRole('button', {name: "Consent"})
    await consentButton.click()
    
    const loginSignupButton = page.getByText(" Signup / Login")
    loginSignupButton.click()

    const signupName = page.locator('[data-qa = "signup-name"]')
    await signupName.fill("testuser1")

    const signupEmail = page.locator('[data-qa = "signup-email"]')
    await signupEmail.fill("test@testing.ro")

    const signupButton = page.getByRole('button', {name: "Signup"})
    await signupButton.click()

    const acctInfoPass = page.locator('[data-qa = "password"]')
    await acctInfoPass.fill("abc123")

    const firstName = page.locator('[data-qa = "first_name"]')
    await (firstName).fill("John")

    const lastName = page.locator('[data-qa = "last_name"]')
    await (lastName).fill("Voight")
     
    const address =  page.locator('[data-qa = "address"]')
    await (address).fill("First Street, 45, LSEG")

    const country = page.locator('[data-qa = "country"]')
    await (country).click()
    await (country).selectOption("Singapore")

    const state =  page.locator('[data-qa = "state"]')
    await (state).fill("Xi-Lyan")

    const city =  page.locator('[data-qa = "city"]')
    await (city).fill("Sun-Tzu")

    const zipcode =  page.locator('[data-qa = "zipcode"]')
    await (zipcode).fill("First Street, 45, LSEG")

    const mobile_number =  page.locator('[data-qa = "mobile_number"]')
    await (mobile_number).fill("1122334455")

    const signupCreateAccount = page.getByRole('button', {name: "Create Account"})
    await (signupCreateAccount).click()


})
test("Login with correct credentials", async({page}) => {
    await page.goto("https://www.automationexercise.com/")
    const pageTitle = await page.title()
    expect(pageTitle).toBe("Automation Exercise")
    const consentButton = page.getByRole('button', {name: "Consent"})
    await consentButton.click()
    
    const loginSignupButton = page.getByText(" Signup / Login")
    loginSignupButton.click()
    
    const loginMessage = page.getByText("Login to your account")
    await expect (loginMessage).toBeVisible()

    const emailInput = page.locator('[data-qa = "login-email"]')
    await emailInput.fill("test@testing.ro")

    const passInput = page.locator('[data-qa = "login-password"]')
    await passInput.fill("abc123")

    const loginButton = page.getByRole('button', {name: "Login"})
    await loginButton.click()

    const accountName = page.getByText('Logged in as testuser1')
    await expect (accountName).toBeVisible()

    const delAccountButton = page.getByText(" Delete Account")
    await delAccountButton.click()

    const deletionMessage = page.locator('[data-qa = "account-deleted"]')
    await expect (deletionMessage).toBeVisible()

})