# 🧪 Testes Automatizados com Playwright

Este projeto contém testes automatizados end-to-end utilizando o framework **Playwright**, com foco em boas práticas, organização por Page Objects e simulação de fluxo real de usuário.

## 📂 Estrutura do Projeto

📂 pageObjects
├── LoginPage.js └── AreaLogadaPage.js

📂 tests
├── login │ ├── loginValido.spec.js │ └── loginInvalido.spec.js └── areaLogada ├── navegacaoUsuario.spec.js └── carrinho.spec.js

📄 playwright.config.js

## 🧰 Tecnologias e Conceitos

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript (ES6+)
- Page Object Model (POM)
- Testes end-to-end (E2E)

---

## 🚀 Como Executar os Testes

# Instale as dependências
npm install

# Execute todos os testes
npx playwright test

# Gerar e visualizar relatório
npx playwright show-report

✅ Funcionalidades Testadas
Autenticação de usuários (login válido e inválido)

Navegação pós-login

Preenchimento de campos e validações

Ações em áreas logadas (ex: carrinho, ofertas exclusivas)

