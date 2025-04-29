// @ts-check
import { test, expect } from '@playwright/test';
 const LoginPage = require('../../pageObjects/LoginPage');

test('Usuario invalido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://kevinfacanha.github.io/electronic');
  await loginPage.preencherEmailESenhaInvalidos('kevin123@gmail.com', '12345678');
  await loginPage.clicarEmLogar();
  
  await page.waitForTimeout(1000);

  // Expect a title "to contain" a substring.
 //await expect(page).toHaveTitle(/Vite/);
});

