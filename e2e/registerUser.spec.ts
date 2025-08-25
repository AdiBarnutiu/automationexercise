import {test, expect} from '@playwright/test';
/*Test Case 1: Register User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button*/

test('register user', async ({page}) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('button', {name: "Consent"}).click();
    await page.getByText(' Signup / Login').click();
    
   const userSignUp = page.getByText('New User Signup!');
   await expect (userSignUp).toBeVisible();
   
   var userName = page.locator('.signup-form').getByPlaceholder('Name')
   await userName.fill('Harry Potter')
   const emailAddress = page.locator('.signup-form').getByPlaceholder('Email Address')
   await emailAddress.fill('testing1_academy@test.com')
   var signUpButton = page.locator('.signup-form').getByRole('button', {name: 'signup'})
   await signUpButton.click()

    var accountElementVisible = page.locator('.login-form').getByText('Enter Account Information')
    await expect (accountElementVisible).toBeVisible();

    var radioMr = page.locator('.clearfix').getByRole('radio', {name: 'Mr.'})
    radioMr.check({force: true})
    await expect (radioMr).toBeChecked()
    const nameInput = page.locator('[data-qa = "name"]')
    await expect (nameInput).toHaveValue("Harry Potter")
    const emailInput = page.locator('[data-qa = "email"]')
    await expect (emailInput).toHaveValue("testing1_academy@test.com")
    const passInput = page.getByLabel("Password ")
    await passInput.fill("testing123$%^")
    const dayInput = page.locator('[data-qa = "days"]')
    await dayInput.click()
    await dayInput.selectOption("15")

    const monthInput = page.locator('[data-qa = "months"]')
    await monthInput.click()
    await monthInput.selectOption("July")

    const yearInput = page.locator('[data-qa = "years"]')
    await yearInput.click()
    await yearInput.selectOption("1977")

    const checkboxSignUp = page.getByRole('checkbox', {name: "newsletter"})
    checkboxSignUp.check()
    await expect (checkboxSignUp).toBeChecked()

    const checkboxReceive = page.getByText("Receive special offers from our partners!")
    checkboxReceive.check()
    await expect (checkboxReceive).toBeChecked()

    const firstName = page.locator('[data-qa = "first_name"]')
    await firstName.fill("Bruce")
    await expect (firstName).toHaveValue("Bruce")

    const lastName = page.locator('[data-qa = "last_name"]')
    await lastName.fill("Willis")
    await expect (lastName).toHaveValue("Willis")

    const company = page.locator('[data-qa = "company"]')
    await company.fill("Hollywood")
    await expect (company).toHaveValue("Hollywood")

    const address1 = page.locator('[data-qa = "address"]')
    await address1.fill("USA, Beverly Hills, Movie street, 23")
    await expect (address1).toHaveValue("USA, Beverly Hills, Movie street, 23")
    
    const address2 = page.locator('[data-qa = "address2"]')
    await address2.fill("USA, Beverly Hills, Movie street, 100")
    await expect (address2).toHaveValue("USA, Beverly Hills, Movie street, 100")

    const country = page.getByText("Country")
    await (country).click()
    await (country).selectOption("United States")

    const state = page.locator('[data-qa = "state"]')
    await (state).fill("Texas")
    await expect (state).toHaveValue("Texas")

    const city = page.locator('[data-qa = "city"]')
    await (city).fill("New York")
    await expect (city).toHaveValue("New York")

    const zipcode = page.locator('[data-qa = "zipcode"]')
    await (zipcode).fill("00112233")
    await expect (zipcode).toHaveValue("00112233")

    const phoneNumber = page.locator('[data-qa = "mobile_number"]')
    await (phoneNumber).fill("0740047484")
    await expect (phoneNumber).toHaveValue("0740047484")

    const createAccountButton = page.getByRole('button', {name: "Create Account"})
    await createAccountButton.click()

    const accountCreatedMessage = page.locator('[data-qa = "account-created"]')
    await expect (accountCreatedMessage).toBeVisible()

    const continueButton = page.locator('[data-qa = "continue-button"]')
    continueButton.click()

    const loggedInAs = page.getByText("Logged in as Harry Potter")
    await expect (loggedInAs).toBeVisible()

    const delAccountButton = page.getByText("Delete Account")
    await delAccountButton.click()

    const accDeletedMessage = page.locator('[data-qa = "account-deleted"]')
    await expect (accDeletedMessage).toBeVisible()
    
    await (continueButton).click()


})