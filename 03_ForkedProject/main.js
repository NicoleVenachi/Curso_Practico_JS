// Al seleccionar el email de la nav bar, que se toggle el menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Función Toggle del menú al darle click al email
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

// Función Toggle del menú ppal al darle click al hamburguer icon
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}