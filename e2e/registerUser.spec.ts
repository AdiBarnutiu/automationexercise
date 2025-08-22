import {test, expect} from '@playwright/test';

test('register user', async ({page}) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('button', {name: "Consent"}).click();
    await page.getByText(' Signup / Login').click();
    
    const email1 = page.locator('.login-form')
    await expect(email1).toBeVisible();
    await email1.getByPlaceholder("Email Address").fill("test@test.com")

    const email2 = page.locator(('.signup-form'))
    await expect(email2).toBeVisible();
    await email2.getByPlaceholder("Email Address").fill("test2@test.com")



})