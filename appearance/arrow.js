 // Défilement à gauche
 function scrollLeft() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: -300, // Valeur pour défiler vers la gauche
        behavior: 'smooth' // Animation douce
    });
}

// Défilement à droite
function scrollRight() {
    const container = document.querySelector('.scroll-container');
    container.scrollBy({
        left: 300, // Valeur pour défiler vers la droite
        behavior: 'smooth' // Animation douce
    });
}

// Attacher les événements click aux flèches
document.querySelector('.left').addEventListener('click', scrollLeft);
document.querySelector('.right').addEventListener('click', scrollRight);