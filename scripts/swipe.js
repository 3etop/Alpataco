import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // Deslizar horizontalmente
    loop: true,              // Habilitar loop infinito
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true, // Habilitar control por mouse
});