const debounce = (func, wait, immediate) => {
    let timeout;
    return function(...args){
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageXOffset + (window.innerHeight * 0.85);
    target.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass);
        }
    });
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
    }, 100));
}