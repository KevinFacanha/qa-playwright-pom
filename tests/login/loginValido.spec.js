import { test, expect } from '@playwright/test';
 const LoginPage = require('../../pageObjects/LoginPage');

test('Usuario valido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://kevinfacanha.github.io/electronic');
  await loginPage.preencherEmailESenhaValidos('teste@exemplo.com', '123456');
  await loginPage.clicarEmLogar();
  await page.waitForTimeout(3000);

  // Expect a title "to contain" a substring.
 //await expect(page).toHaveTitle(/Vite/);
});