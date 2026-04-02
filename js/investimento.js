document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        observer.observe(card);
    });

    const accordionItems = document.querySelectorAll('.acc-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      accordionItems.forEach(i => i.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  const teste = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  accordionItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.8s ease-out";
    teste.observe(item);
  });
});