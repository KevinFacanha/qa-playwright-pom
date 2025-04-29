class AreaLogadaPage{
    constructor(page){
        this.page = page;
    }

    async clicarCarrinho(){
        const botaoCarrinho = await this.page.locator('.mt-3 > .bg-indigo-600').first();
        await botaoCarrinho.click();
    }

    async clicarBotaoCarrinho(){
        const carrinhoBotao = await this.page.getByRole('button', { name: 'Carrinho' });
        await carrinhoBotao.click();
    }

    async botaoQuantidade(){
        const quantidadeProdutos = await this.page.getByRole('button').filter({ hasText: /^$/ }).nth(1);
        await quantidadeProdutos.click();
    }

    async botaoFinalizarCompra(){
        const finalizarCompra = await this.page.getByRole('button', { name: 'Finalizar Compra' });
        await finalizarCompra.click();
    }

    async preencherInformacoesEntrega({ nome, email, endereco, cidade, cep, pais }){
        await this.page.getByRole('textbox', { name: 'Nome Completo' }).fill(nome);
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Endereço' }).fill(endereco);
        await this.page.getByRole('textbox', { name: 'Cidade' }).fill(cidade);
        await this.page.getByRole('textbox', { name: 'CEP' }).fill(cep);
        await this.page.getByRole('textbox', { name: 'País' }).fill(pais);
    }

    async botaoContinuarPagamento(){
        const botaoPagamento = await this.page.getByRole('button', { name: 'Continuar para Pagamento' });
        await botaoPagamento.click();
    }

    async informacaoPagamento({ numero, nome, data, cvv }){
        await this.page.getByRole('textbox', { name: 'Número do Cartão' }).fill(numero);
        await this.page.getByRole('textbox', { name: 'Nome no Cartão' }).fill(nome);
        await this.page.getByRole('textbox', { name: 'Data de Validade (MM/AA)' }).fill(data);
        await this.page.getByRole('textbox', { name: 'CVV' }).fill(cvv);
    }

    async botaoFinalizarCompra(){
        const finalizarCompra = await this.page.getByRole('button', { name: 'Finalizar Compra' });
        await finalizarCompra.click();
    }

    async botaoSair(){
        const sairBotao = await this.page.getByRole('button', { name: 'Sair' })
        await sairBotao.click();
    }
    
    async carrinhoNovidades(){
        const carrinho = await this.page.locator('div:nth-child(3) > .grid > div > .p-4 > .mt-3 > .bg-indigo-600').first()
        await carrinho.click();
    }

    async nossosProdutos(){
        const botaoCategoria = await this.page.getByRole('button', { name: 'Áudio' })
        await botaoCategoria.click();
    }

    async ofertasExclusivas(dados){
        await this.page.getByRole('textbox', { name: 'Seu endereço de email' }).fill(dados.email);

    }

    async botaoInscrever(){
        await this.page.getByRole('button', { name: 'Inscrever' }).click();
    }

    async botaoComprar(){
        const comprarAgora = await this.page.getByRole('button', { name: 'Comprar Agora' })
        await comprarAgora.click();
    }
}

module.exports = AreaLogadaPage;