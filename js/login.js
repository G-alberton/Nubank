document.addEventListener("DOMContentLoaded", () => {
    // Seletores dos elementos do formulário
    const cpfInput = document.getElementById('cpf');
    const btnSubmit = document.getElementById('btnSubmit');
    
    // Seletores dos elementos visuais (Lado Roxo e Container dos Cartões)
    const rightSide = document.querySelector('.right-side');
    const cardsContainer = document.querySelector('.cards-container-3d');

    // ==========================================
    // 1. LÓGICA DE FORMATAÇÃO E VALIDAÇÃO DO CPF
    // ==========================================
    if (cpfInput && btnSubmit) {
        cpfInput.addEventListener('input', (e) => {
            // 1. Remove tudo que não for número antes de qualquer coisa
            let value = e.target.value.replace(/\D/g, "");

            // 2. Limita estritamente a 11 dígitos numéricos
            if (value.length > 11) value = value.slice(0, 11);

            // 3. Aplica a máscara de forma "viva" enquanto digita
            // Formato final desejado: 000.000.000-00
            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
            }

            // 4. Força o valor formatado de volta para o campo de texto
            e.target.value = value;

            // 5. Lógica de Ativação do Botão (baseado nos 11 números reais)
            const rawDigits = value.replace(/\D/g, ""); 
            
            if (rawDigits.length === 11) {
                // ESTADO ATIVO: Roxo Nubank vibrante e cursor de clique
                btnSubmit.disabled = false;
                btnSubmit.style.backgroundColor = "#820AD1"; 
                btnSubmit.style.color = "#FFFFFF";
                btnSubmit.style.cursor = "pointer"; // Remove o símbolo de bloqueado
                btnSubmit.style.opacity = "1";
            } else {
                // ESTADO DESATIVADO: Roxo apagado e cursor de "bloqueado"
                btnSubmit.disabled = true;
                btnSubmit.style.backgroundColor = "rgba(130, 10, 209, 0.2)";
                btnSubmit.style.color = "rgba(255, 255, 255, 0.4)";
                btnSubmit.style.cursor = "not-allowed"; // Símbolo de bloqueado do seu print
                btnSubmit.style.opacity = "0.7";
            }
        });
    }

    // ==========================================
    // 2. MOVIMENTAÇÃO 3D DOS CARTÕES (MOUSE)
    // ==========================================
    if (rightSide && cardsContainer && window.innerWidth > 992) {
        rightSide.addEventListener('mousemove', (e) => {
            const rect = rightSide.getBoundingClientRect();
            
            // Calcula a posição do mouse relativa ao centro da metade direita
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Define a sensibilidade da inclinação
            const rotateX = (centerY - y) / 25;
            const rotateY = (x - centerX) / 25;

            // Aplica a rotação no container dos cartões cinzas
            cardsContainer.style.transition = 'transform 0.1s ease-out';
            cardsContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        // Retorna os cartões à posição original suavemente ao sair com o mouse
        rightSide.addEventListener('mouseleave', () => {
            cardsContainer.style.transition = 'transform 0.6s ease-in-out';
            cardsContainer.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    }
});