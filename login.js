document.addEventListener('DOMCOntentLoaded', function() {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const loginMessage = document.getElementById('login-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        // Validação do e-mail
        if (!emailInput.value.trim()) {
            showError(emailInput, emailError, 'O e-mail é obrigatório.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, emailError, 'E-mail inválido.');
            isValid = false;
        } else {
            hideError(emailInput, emailError);
        }

        // Validação da senha
        if (!passwordInput.value.trim()) {
            showError(passwordInput, passwordError, 'A senha é obrigatória.');
            isValid = false;
        } else if (passwordInput.value.length < 8) {
            showError(passwordInput, passwordError, 'A senha deve ter pelo menos 8 caracteres.');
            isValid = false;
        } else {
            hideError(passwordInput, passwordError);
        }

        if (isValid) {
            // Simulação de requisição assíncrona (Fetch API)
            const data = {
                email: emailInput.value.trim(),
                senha: passwordInput.value
            };

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    showMessage(loginMessage, 'Login realizado com sucesso!', 'success');
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 2000);
                } else {
                    showMessage(loginMessage, 'E-mail ou senha incorretos.', 'error');
                }
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                showMessage(loginMessage, 'Erro ao conectar com o servidor.', 'error');
            });
        }
    });

    function showError(input, errorElement, message) {
        input.classList.add('invalid');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(input, errorElement) {
        input.classList.remove('invalid');
        errorElement.style.display = 'none';
    }

    function showMessage(element, message, type) {
        element.textContent = message;
        element.classList.remove('success', 'error');
        element.classList.add(type);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});