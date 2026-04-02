document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const observarEntrada = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150); 
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        
        observarEntrada.observe(card);
    });

    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(cards, {
            max: 12,           
            speed: 400,        
            glare: true,       
            "max-glare": 0.15, 
            scale: 1.03,       
            perspective: 1000, 
        });
    }

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transition = "transform 0.1s";
            card.style.transform = "scale(0.95)";
            
            setTimeout(() => {
                card.style.transform = "scale(1.03)";
            }, 100);
        });
    });

    window.addEventListener('scroll', () => {
        const card = document.querySelector('.how-to-card');
        const bar = document.getElementById('dynamicBar');
        const steps = document.querySelectorAll('.step-item');
        
        if (!card || !bar) return;

        // Posição do card na tela
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calcula o progresso: começa quando o topo do card entra na tela
        // e termina quando o fundo do card sai.
        let progress = (windowHeight * 0.7 - rect.top) / rect.height * 100;
        
        // Limita entre 0 e 100%
        progress = Math.max(0, Math.min(100, progress));
        
        // Aplica altura na barra
        bar.style.height = `${progress}%`;

        // Ativa as cores das letras conforme a barra desce
        steps.forEach((step, index) => {
            const stepThreshold = (index + 0.5) * (100 / steps.length);
            if (progress >= stepThreshold) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    });

    // Lógica do Accordion (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Fecha outros itens se quiser efeito de apenas um aberto por vez
            // document.querySelectorAll('.accordion-item').forEach(i => i !== item && i.classList.remove('active'));
            
            item.classList.toggle('active');
        });
    });

    // Animação de entrada do Footer
    const observerFooter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const footer = document.querySelector('.footer-container');
    footer.style.opacity = "0";
    footer.style.transform = "translateY(30px)";
    footer.style.transition = "all 0.8s ease-out";
    observerFooter.observe(footer);
});

