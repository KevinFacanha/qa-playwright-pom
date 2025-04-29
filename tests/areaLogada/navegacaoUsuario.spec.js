import { test, expect } from '@playwright/test';
 
 const LoginPage = require('../../pageObjects/LoginPage');
 const AreaLogadaPage = require('../../pageObjects/AreaLogadaPage');

 test('Navegando pela pagina', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto('https://kevinfacanha.github.io/electronic');
    await loginPage.preencherEmailESenhaValidos('teste@exemplo.com', '123456');
    await loginPage.clicarEmLogar();

    const arealogadapage = new AreaLogadaPage(page);
    await arealogadapage.clicarCarrinho();

    

    await arealogadapage.carrinhoNovidades();

    await arealogadapage.nossosProdutos();

    await arealogadapage.ofertasExclusivas({ email: 'kevin123@gmail.com'});

    await arealogadapage.botaoInscrever();

    await arealogadapage.botaoComprar();

    await page.waitForTimeout(2000);

 });