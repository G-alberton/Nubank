// 1. Pegamos os elementos pelos IDs que estão no seu HTML
const input = document.getElementById('cnpj-cpf');
const btn = document.getElementById('id-submit'); // Note que mudei para id-submit
const errorMsg = document.getElementById('error-message');

// 2. Função que mascara e valida
input.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove letras
    
    // Aplica a máscara visual
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
    
    e.target.value = value;

    // 3. Validação: Libera o botão se tiver 11 ou 14 números
    const pureValue = value.replace(/\D/g, '');
    if (pureValue.length === 11 || pureValue.length === 14) {
        btn.disabled = false;
        btn.style.background = "#820AD1"; // Fica roxo quando libera
        btn.style.cursor = "pointer";
        if(errorMsg) errorMsg.innerText = "";
    } else {
        btn.disabled = true;
        btn.style.background = "#ccc"; // Fica cinza quando bloqueado
        btn.style.cursor = "not-allowed";
        if (pureValue.length > 0 && errorMsg) {
            errorMsg.innerText = "Documento incompleto";
        }
    }
});

// 4. Alerta ao clicar
btn.addEventListener('click', () => {
    alert(`Documento ${input.value} confirmado com sucesso!`);
});

btn.addEventListener('click', () => {
    alert(`Documento ${input.value} confirmado com sucesso!`);
});

// Seleciona os elementos pelos IDs que você definiu no HTML
const campoInput = document.getElementById('cnpj-cpf');
const botaoEnviar = document.getElementById('id-submit');

// Escuta cada tecla digitada
campoInput.addEventListener('input', () => {
    // Remove tudo que não for número para validar
    const apenasNumeros = campoInput.value.replace(/\D/g, '');

    // Condição: Se tiver 11 dígitos (CPF) ou 14 (CNPJ), habilita o botão
    if (apenasNumeros.length === 11 || apenasNumeros.length === 14) {
        botaoEnviar.disabled = false; // Ativa o botão
        botaoEnviar.style.cursor = "pointer"; // Muda o mouse para a mãozinha
    } else {
        botaoEnviar.disabled = true; // Mantém desativado se estiver incompleto
        botaoEnviar.style.cursor = "not-allowed";
    }
});