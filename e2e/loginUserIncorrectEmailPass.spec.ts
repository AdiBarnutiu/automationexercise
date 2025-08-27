import {test, expect} from '@playwright/test';
import { log } from 'console';
/*Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible*/
test('login with incorrect credentials', async({page}) => {
    await page.goto("https://www.automationexercise.com/")

    const consentButton = page.getByRole('button', {name: "Consent"})
    await consentButton.click()

    const pageTitle = await page.title()
    expect (pageTitle).toBe('Automation Exercise')

    const signUpButton = page.getByText(' Signup / Login')
    await signUpButton.click()

    const loginAccount = await page.locator('.login-form').getByText("Login to your account")
    expect (loginAccount).toBeVisible()

    const emailAddress = page.locator('[data-qa = "login-email"]')
    await emailAddress.fill("incorrect@email.com")

    const passLogin =  page.locator('[data-qa = "login-password"]')
    await passLogin.fill("incorrect_password")

    const loginButton = page.locator('[data-qa = "login-button"]')
    await loginButton.click()

    const errorMessage = page.getByText("Your email or password is incorrect!")
    await expect (errorMessage).toBeVisible()



})