function changeCard(type, element) {
    const card = document.getElementById('main-card');
    const title = document.getElementById('card-title');
    
    // Remove 'active' de todos os botões
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    // Adiciona ao clicado
    element.classList.add('active');

    // Lógica de troca visual
    if (type === 'roxo') {
        card.style.background = 'linear-gradient(135deg, #820AD1, #4E067D)';
        title.innerText = "Nubank Classic";
    } else if (type === 'prata') {
        card.style.background = 'linear-gradient(135deg, #CFD9DF, #A1B0C1)';
        title.innerText = "Nubank Platinum";
    } else if (type === 'preto') {
        card.style.background = 'linear-gradient(135deg, #2D2D2D, #000000)';
        title.innerText = "Nubank Ultravioleta";
    }
}