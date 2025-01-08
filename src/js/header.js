const header = document.querySelector('header');

// Variables pour gérer le scrolling
let lastScrollPosition = 0;
let isScrolling;

// Fonction pour gérer l'affichage/masquage du header avec animation
window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        // On masque le header quand on scrolle vers le bas
        header.style.transform = 'translateY(-100%)';
    } else {
        // On affiche le header quand on scrolle vers le haut ou qu'on est en haut
        header.style.transform = 'translateY(0)';
    }

    // Mise à jour de la dernière position de scroll
    lastScrollPosition = currentScrollPosition;

    // Réactiver le header après arrêt du scroll
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        header.style.transform = 'translateY(0)';
    }, 800); // Le header revient après 200ms d'inactivité
});