const card = document.getElementById('main-card');
const title = document.getElementById('card-title');

// 1. Função para trocar o tipo de cartão
function changeCard(type, element) {
    // Atualiza a classe ativa nos botões
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    element.classList.add('active');

    const configs = {
        'roxo': { color: 'var(--nu-purple)', name: 'Nubank Classic' },
        'prata': { color: 'var(--nu-silver)', name: 'Nubank Platinum' },
        'preto': { color: 'var(--nu-black)', name: 'Nubank Ultravioleta' }
    };

    const sel = configs[type];
    card.style.setProperty('--current-card', sel.color);
    title.innerText = sel.name;
}

// Efeito de Inclinação (Tilt)
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;

    // Quando o mouse se move, queremos resposta instantânea, 
    // então desativamos a transição temporariamente no JS
    card.style.transition = "none"; 

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

// Reset Suave ao tirar o mouse
card.addEventListener('mouseleave', () => {
    // Reativamos a transição para que a volta seja suave
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.5s ease";
    
    // Resetamos as propriedades
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});