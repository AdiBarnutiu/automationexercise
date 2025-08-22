import {test, expect} from '@playwright/test';

test('register user', async ({page}) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('button', {name: "Consent"}).click();
    await page.getByText(' Signup / Login').click(); 
})