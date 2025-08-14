/*MENU TOGGLE*/
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener("click", showMenu);

function showMenu() {
    const menu = document.getElementById('menu');
    
    menu.classList.toggle("active");
}

/*MOSTRAR SCROLL TOP Y BOTÓN LLAMAR TELÉFONO*/
function scrollTop() {
    const btnScrollTop = document.getElementById('btn-scroll-top');
    const btnPhoneCall = document.getElementById('btn-phone-call');

    if (this.scrollY >= 600) {
        btnScrollTop.classList.add("btn-scroll-top");
    } else {
        btnScrollTop.classList.remove("btn-scroll-top");
    }
    if (this.scrollY >= 900) {
        btnPhoneCall.classList.add('btn-phone-call-scroll-top');
    } else {
        btnPhoneCall.classList.remove('btn-phone-call-scroll-top');
    }
}
window.addEventListener("scroll", scrollTop);

/*SCROLL REVEAL ANIMATION*/
var slideDown = {
    distance: '20%',
    origin: 'top',
    duration: 2000,
    reset: true,
};
ScrollReveal().reveal('.hero__info, .about__title, .about__paragraph, .services__title, .services__paragraph, .services__info, .team__title, .team__info, .values-contact, input, textarea', slideDown);

/*SCROLL FOOTER*/
gsap.to('#cloud', {
    x: -400, 
    scrollTrigger: {
        trigger: '#cloud',
        start: 'center center',
        end: 'bottom top',
        scrub: 20
    }
});
gsap.to('#eagle', {
    x: 200,
    y: 520,
    scrollTrigger: {
        trigger: '#eagle',
        start: 'center center',
        end: 'bottom top',
        scrub: 10
    }
});       