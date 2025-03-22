# Sistema de Gestão de Supermercado Web

Este projeto é um sistema de gestão de estoque para supermercados, desenvolvido como parte da disciplina de Desenvolvimento para Web.

## 💻 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **`cadastro/`**: Contém os arquivos relacionados à Tela de Cadastro.
    - `index.html`: A estrutura HTML da tela de cadastro.
    - `styles/cadastro.css`: Os estilos CSS específicos para a tela de cadastro.
    - `scripts/cadastro.js`: A lógica JavaScript da tela de cadastro.
- **`login/`**: Contém os arquivos relacionados à Tela de Login.
    - `index.html`: A estrutura HTML da tela de login.
    - `styles/login.css`: Os estilos CSS específicos para a tela de login.
    - `scripts/login.js`: A lógica JavaScript da tela de login.
- **`tela_inicial/`**: Contém os arquivos da tela inicial (após o login).
    - `tela-inicial.html`: A estrutura HTML da tela inicial.
    -  `styles/styles.css`: Os estilos CSS específicos para a tela inicial.
    -  `imagens/`: Contendo os assets específicos da tela inicial.
- **`index.html`**: Arquivo na raiz do projeto que redireciona o usuário para a tela de login.

## 🚀 Como Executar o Projeto Localmente

1.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/CaririTeam/sistema-gestao-supermercado-web.git
    ```

2.  **Acesse o Diretório do Projeto:**
    ```bash
    cd sistema-gestao-supermercado-web
    ```

3.  **Abra o Projeto com o Live Server (VS Code):**
    *   Se você estiver usando o VS Code com a extensão Live Server, clique com o botão direito do mouse no arquivo `index.html` (na raiz do projeto) e selecione "Open with Live Server".
    *   Isso abrirá o navegador automaticamente na tela de login.

4. **Usando um servidor HTTP simples (alternativa):**

    *   Se você tiver o Node.js e o npm instalados, poderá usar um servidor HTTP simples.  Abra o terminal na raiz do projeto e execute:
    ```bash
     npx http-server
     ```
      Isso iniciará um servidor local (geralmente em `http://localhost:8080`).

## 🔑 Login e Cadastro (API de Teste)

*   O projeto utiliza a API de testes [Reqres](https://reqres.in/) para simular o login e o cadastro.
*   **Cadastro:** Para realizar um cadastro com sucesso, use o e-mail `eve.holt@reqres.in` (ou outros e-mails de teste fornecidos pela Reqres).  Outros e-mails resultarão em um erro da API.
*   **Login:** Após o cadastro, você pode fazer login com o e-mail e senha que você usou.

## ℹ️ Fluxo do Usuário

1.  Ao acessar o site, o usuário é redirecionado para a tela de login (`login/index.html`).
2.  O usuário pode se cadastrar (usando o e-mail de teste da Reqres) ou fazer login (se já tiver se cadastrado).
3.  Após um login bem-sucedido, o usuário é redirecionado para a tela inicial (`tela_inicial/tela-inicial.html`).

## 👥 Equipe

*   [Francisco Eudo da Silva](https://github.com/franciscoeudo)
*   [Gabriel Vasconcelos Andrade da Silva](https://github.com/vasconcel)
*   [Wagner Fernando Lavandoski Padilha](https://github.com/WagnerLavandoski)

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - veja o arquivo `LICENSE` para detalhes.
