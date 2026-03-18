const card = document.getElementById('main-card');
const title = document.getElementById('titulo-cartao');

function mudacartao(type, element) {
    // 1. Remove a classe active de todos os botões
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    
    // 2. Adiciona a classe active ao botão clicado
    element.classList.add('active');

    const configs = {
        'roxo': { color: 'var(--nu-purple)', name: 'Nubank Classic' },
        'prata': { color: 'var(--nu-silver)', name: 'Nubank Platinum' },
        'preto': { color: 'var(--nu-black)', name: 'Nubank Ultravioleta' }
    };

    const sel = configs[type];
    
    if (sel) {
        // Aplica a cor ao cartão usando a variável CSS
        card.style.setProperty('--current-card', sel.color);
        // Atualiza o texto do título
        title.innerText = sel.name;
    }
}

// Efeito de Inclinação (Tilt)
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = (rect.height / 2 - y) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transition = "none"; 
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

// Reset suave ao tirar o mouse
card.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.5s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});