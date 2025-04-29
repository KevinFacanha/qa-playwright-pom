class LoginPage{
    constructor(page){
        this.page = page;
    }

    async preencherEmailESenhaInvalidos(email, senha){
        const campoEmail = await this.page.getByRole('textbox', { name: 'Email' });
        await campoEmail.fill(email);

        const campoSenha = await this.page.getByRole('textbox', { name: 'Senha' });
        await campoSenha.fill(senha);
    }

    async clicarEmLogar(){
        const botaoLogin = await this.page.getByRole('button', { name: 'Entrar' })
        await botaoLogin.click();
    }

    async preencherEmailESenhaValidos(email, senha){
        const campoEmail = await this.page.getByRole('textbox', { name: 'Email' });
        await campoEmail.fill(email);

        const campoSenha = await this.page.getByRole('textbox', { name: 'Senha' });
        await campoSenha.fill(senha);
    }
    
}

module.exports = LoginPage;