const card = document.getElementById('main-card');
const title = document.getElementById('titulo-cartao');

function mudacartao(type, element) {
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    element.classList.add('active');

    const configs = {
        'roxo': { color: 'var(--nu-purple)', name: 'Nubank Classic' },
        'prata': { color: 'var(--nu-silver)', name: 'Nu Empresa' },
        'preto': { color: 'var(--nu-black)', name: 'Nubank Ultravioleta' }
    };

    const sel = configs[type];
    if (sel) {
        document.documentElement.style.setProperty('--current-card', sel.color);
        title.innerText = sel.name;
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = 'cardEntrance 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    }
}

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    const rotateX = (rect.height / 2 - y) / 12;
    const rotateY = (x - rect.width / 2) / 12;

    card.style.transition = "none"; 
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), background 0.5s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const card1 = document.getElementById('scroll-card-1');
    const card2 = document.getElementById('scroll-card-2');

    if (card1 && card2) {
        const rotBack = 12 + (scrollY * 0.05);
        const rotFront = -8 - (scrollY * 0.05);

        card1.style.transform = `translateY(${scrollY * -0.1}px) rotate(${rotBack}deg)`;
        card2.style.transform = `translateY(${scrollY * -0.2}px) rotate(${rotFront}deg)`;
    }
});

const conteudos = [
    { text: "Guarde dinheiro de maneira organizada de acordo com seus objetivos.", link: "Conheça as Caixinhas do Nubank >" },
    { text: "Invista em opções que rendem mais que a poupança com facilidade.", link: "Explorar investimentos >" },
    { text: "Proteja o que é importante para você com planos que cabem no bolso.", link: "Ver opções de seguro >" },
    { text: "Compre em lojas parceiras e receba parte do dinheiro de volta.", link: "Ir para o Shopping Nu >" }
];

function atualizaTexto(index) {
    const textElement = document.getElementById('app-text');
    const linkElement = document.getElementById('app-link');

    document.querySelectorAll('.app-card').forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });

    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.innerText = conteudos[index].text;
        linkElement.innerText = conteudos[index].link;
        textElement.style.opacity = 1;
    }, 200);
}