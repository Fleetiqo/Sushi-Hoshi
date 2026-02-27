// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];


// Menu modal functionality
const menuData = {
    'midi-semaine': {
        title: 'Menu du Midi - Lundi au Vendredi',
        price: '23,99$',
        prices: {
            enfant35: '5,99$',
            enfant610: '11,99$',
            agedor: '21,99$'
        },
        content: `
            <h3>Menu du Midi - Lundi au Vendredi</h3>
            <p class="menu-price">23,99$ par personne</p>
            <div class="menu-prices-grid">
                <div class="price-item">
                    <span>Enfant (3-5 ans)</span>
                    <span>5,99$</span>
                </div>
                <div class="price-item">
                    <span>Enfant (6-10 ans)</span>
                    <span>11,99$</span>
                </div>
                <div class="price-item">
                    <span>Âge d'or (65 ans et +)</span>
                    <span>21,99$</span>
                </div>
            </div>
            <p class="menu-note">Consultez notre menu complet sur place pour voir tous les plats disponibles.</p>
        `
    },
    'midi-fds': {
        title: 'Menu du Midi - Samedi & Dimanche',
        price: '25,99$',
        prices: {
            enfant35: '6,99$',
            enfant610: '12,99$',
            agedor: '22,99$'
        },
        content: `
            <h3>Menu du Midi - Samedi & Dimanche</h3>
            <p class="menu-price">25,99$ par personne</p>
            <div class="menu-prices-grid">
                <div class="price-item">
                    <span>Enfant (3-5 ans)</span>
                    <span>6,99$</span>
                </div>
                <div class="price-item">
                    <span>Enfant (6-10 ans)</span>
                    <span>12,99$</span>
                </div>
                <div class="price-item">
                    <span>Âge d'or (65 ans et +)</span>
                    <span>22,99$</span>
                </div>
            </div>
            <p class="menu-note">Consultez notre menu complet sur place pour voir tous les plats disponibles.</p>
        `
    },
    'soir': {
        title: 'Menu du Soir - Lundi au Jeudi',
        price: '40,99$',
        prices: {
            enfant35: '9,99$',
            enfant610: '19,99$',
            agedor: '37,99$'
        },
        content: `
            <h3>Menu du Soir - Lundi au Jeudi</h3>
            <p class="menu-price">40,99$ par personne</p>
            <div class="menu-prices-grid">
                <div class="price-item">
                    <span>Enfant (3-5 ans)</span>
                    <span>9,99$</span>
                </div>
                <div class="price-item">
                    <span>Enfant (6-10 ans)</span>
                    <span>19,99$</span>
                </div>
                <div class="price-item">
                    <span>Âge d'or (65 ans et +)</span>
                    <span>37,99$</span>
                </div>
            </div>
            <p class="menu-note">Consultez notre menu complet sur place pour voir tous les plats disponibles.</p>
        `
    },
    'fds': {
        title: 'Menu Fin de Semaine - Vendredi, Samedi & Dimanche',
        price: '43,99$',
        prices: {
            enfant35: '10,99$',
            enfant610: '21,99$',
            agedor: '39,99$'
        },
        content: `
            <h3>Menu Fin de Semaine Soir</h3>
            <p class="menu-subtitle">Vendredi, Samedi & Dimanche</p>
            <p class="menu-price">43,99$ par personne</p>
            <div class="menu-prices-grid">
                <div class="price-item">
                    <span>Enfant (3-5 ans)</span>
                    <span>10,99$</span>
                </div>
                <div class="price-item">
                    <span>Enfant (6-10 ans)</span>
                    <span>21,99$</span>
                </div>
                <div class="price-item">
                    <span>Âge d'or (65 ans et +)</span>
                    <span>39,99$</span>
                </div>
            </div>
            <p class="menu-note">Consultez notre menu complet sur place pour voir tous les plats disponibles.</p>
        `
    }
};

function openMenuModal(menuType) {
    console.log('Opening modal for:', menuType);
    const modal = document.getElementById('menuModal');
    const modalBody = document.getElementById('modalBody');
    
    if (menuData[menuType]) {
        modalBody.innerHTML = menuData[menuType].content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeMenuModal() {
    const modal = document.getElementById('menuModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Expose functions to global scope
window.openMenuModal = openMenuModal;
window.closeMenuModal = closeMenuModal;

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target === modal) {
        closeMenuModal();
    }
});
