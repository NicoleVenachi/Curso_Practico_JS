// Al seleccionar el email de la nav bar, que se toggle el menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);


// Función Toggle del menú al darle click al email
function toggleDesktopMenu(){
    
    //voy a evitar problemas entre product detail y desktop menu

    //voy a evitar problemas entre product detail y mobile menu
    isproductDetailOpen = productDetail.classList.contains('inactive');

    if(isproductDetailOpen){
        // si está cerrado, no hago nada

    }
    else{
         // si está abierto, lo cierro
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

// Función Toggle del menú ppal al darle click al hamburguer icon
function toggleMobileMenu(){

    //voy a evitar problemas entre product detail y mobile menu
    isproductDetailOpen = productDetail.classList.contains('inactive');

    if(isproductDetailOpen){
        // si está cerrado, no hago nada

    }
    else{
         // si está abierto, lo cierro
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

// Función Toggle de productos del carrito al clicker el carrito
function toggleCartAside(){

    //voy a evitar problemas entre product detail y mobile menu
    isMobileMenuOpen = mobileMenu.classList.contains('inactive');

    if( isMobileMenuOpen ){ 
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        mobileMenu.classList.add('inactive');
    }

    //voy a evitar problemas entre product detail y desktop menu

    isDesktopMenuOpen = desktopMenu.classList.toggle('inactive');

    if( isDesktopMenuOpen ){ 
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}
