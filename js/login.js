document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.getElementById('cpf');
    const btnSubmit = document.getElementById('btnSubmit');
    const rightSide = document.querySelector('.right-side');
    const cardsContainer = document.querySelector('.cards-container-3d');

    if (cpfInput && btnSubmit) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, "");

            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
            }

            e.target.value = value;

            const rawDigits = value.replace(/\D/g, ""); 
            
            if (rawDigits.length === 11) {
                btnSubmit.disabled = false;
                btnSubmit.style.backgroundColor = "#820AD1"; 
                btnSubmit.style.color = "#FFFFFF";
                btnSubmit.style.cursor = "pointer"; 
                btnSubmit.style.opacity = "1";
            } else {
                btnSubmit.disabled = true;
                btnSubmit.style.backgroundColor = "rgba(130, 10, 209, 0.2)";
                btnSubmit.style.color = "rgba(255, 255, 255, 0.4)";
                btnSubmit.style.cursor = "not-allowed"; 
                btnSubmit.style.opacity = "0.7";
            }
        });
    }

    if (rightSide && cardsContainer && window.innerWidth > 992) {
        rightSide.addEventListener('mousemove', (e) => {
            const rect = rightSide.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (centerY - y) / 25;
            const rotateY = (x - centerX) / 25;

            cardsContainer.style.transition = 'transform 0.1s ease-out';
            cardsContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        rightSide.addEventListener('mouseleave', () => {
            cardsContainer.style.transition = 'transform 0.6s ease-in-out';
            cardsContainer.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    }
});