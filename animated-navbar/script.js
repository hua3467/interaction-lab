const navbar = document.querySelector('.navbar');
const logoSVG = document.querySelector('.logo svg');
const navLink = document.querySelectorAll('.nav-link');
const linkText = document.querySelectorAll('.link-text');
const main = document.querySelector('main');

navbar.addEventListener('mouseenter', () => {
    navbar.style.width = '16rem';
    main.style.marginLeft = '16rem';
    linkText.forEach((el) => {
        el.style.display = 'block';
    })
});
navbar.addEventListener('mouseleave', () => {
    navbar.style.width = '5rem';
    main.style.marginLeft = '5rem';
    linkText.forEach((el) => {
        el.style.display = 'none';
    })
})

navLink.forEach( el => {
    el.addEventListener('mouseenter', () => {
        el.style.filter = 'grayscale(0%) opacity(1)';
        el.style.gackground = 'var(--bg-secondary)';
        el.style.color = 'var(--text-secondary)';
        if ( el.parentElement.classList.contains('logo')) {
            logoSVG.style.transform = 'rotate(180deg)';
        }
        
    })
    el.addEventListener('mouseleave', () => {
        el.style.filter = 'grayscale(100%) opacity(0.7)';
        el.style.gackground = 'var(--bg-primary)';
        el.style.color = 'var(--text-primary)';
        if ( el.parentElement.classList.contains('logo')) {
            logoSVG.style.transform = 'rotate(0deg)';
        }
    })
})