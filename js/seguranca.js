document.addEventListener('DOMContentLoaded', function() {
    const shield = document.getElementById('interactive-shield');
    if (shield) {
        shield.addEventListener('mouseenter', () => {
            shield.style.transform = 'scale(1.05) rotate(2deg)';
        });
        shield.addEventListener('mouseleave', () => {
            shield.style.transform = 'scale(1)';
        });
    }

    const toggles = document.querySelectorAll('.switch input');

    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const container = this.closest('.control-item');
            const statusLabel = container.querySelector('.status-text');
            
            if (this.checked) {
                statusLabel.innerText = statusLabel.getAttribute('data-on');
                statusLabel.classList.remove('status-off');
            } else {
                statusLabel.innerText = statusLabel.getAttribute('data-off');
                statusLabel.classList.add('status-off');
            }
        });
    });
    
});