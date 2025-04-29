import { test, expect } from '@playwright/test';
 const AreaLogadaPage = require('../../pageObjects/AreaLogadaPage');
 const LoginPage = require('../../pageObjects/LoginPage');

test('Carrinho de compra', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await page.goto('https://kevinfacanha.github.io/electronic');
        await loginPage.preencherEmailESenhaValidos('teste@exemplo.com', '123456');
        await loginPage.clicarEmLogar();
        await page.waitForTimeout(3000);

        const arealogadapage = new AreaLogadaPage(page);
        await arealogadapage.clicarCarrinho();
        await arealogadapage.clicarBotaoCarrinho();
        await arealogadapage.botaoQuantidade();
        await arealogadapage.botaoFinalizarCompra();

        await arealogadapage.preencherInformacoesEntrega({
            nome: 'Kevin Teste',
            email: 'kevin@test.com',
            endereco: 'Rua Olinda, 123',
            cidade: 'Fortaleza',
            cep: '05234134',
            pais: 'Brasil'
        });

        await arealogadapage.botaoContinuarPagamento();

        await arealogadapage.informacaoPagamento({
            numero: '12345667890',
            nome: 'Kevin Ribeiro Facanha',
            data: '10/25',
            cvv: '123'
        }),

        await arealogadapage.botaoFinalizarCompra();

        await arealogadapage.botaoSair();

        

  
  await page.waitForTimeout(2000);


});
