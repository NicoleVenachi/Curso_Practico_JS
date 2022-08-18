// Al seleccionar el email de la nav bar, que se toggle el menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('#shoppingCartContainer'); // CartContainer

const selectedProductDetail = document.querySelector('#product-detail');
const selectedProductDetailCloseIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
selectedProductDetailCloseIcon.addEventListener('click', closeSelectedProductDetail);

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

    // Cierro selected product

    isSelectedProductDetailOpen = selectedProductDetail.classList.contains('inactive');


    if (isSelectedProductDetailOpen){
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        selectedProductDetail.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');



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

    // Cierro selected product

    isSelectedProductDetailOpen = selectedProductDetail.classList.contains('inactive');


    if (isSelectedProductDetailOpen){
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        selectedProductDetail.classList.add('inactive');
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

    isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

    if( isDesktopMenuOpen ){ 
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        desktopMenu.classList.add('inactive');
    }

    //cerrar productSelecteddetail antes de abrir carrito
    isSelectedProductDetailOpen = selectedProductDetail.classList.contains('inactive');


    if (isSelectedProductDetailOpen){
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        selectedProductDetail.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

// Función Toggle de imagenes del producctos, abrir sus detalles
function openSelectedProductDetail(){

    //vcerrar mobile menu si está abierto
    isMobileMenuOpen = mobileMenu.classList.contains('inactive');

    if( isMobileMenuOpen ){ 
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        mobileMenu.classList.add('inactive');
    }


    //cerar carrito si está abierto
    isproductDetailOpen = productDetail.classList.contains('inactive');

    if(isproductDetailOpen){
        // si está cerrado, no hago nada

    }
    else{
         // si está abierto, lo cierro
        productDetail.classList.add('inactive');
    }

    //cierro desktop menu

    isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

    if( isDesktopMenuOpen ){ 
        // si está cerrado, no hago nada
    }
    else{
        // si está abierto, lo cierro
        desktopMenu.classList.add('inactive');
    }



    selectedProductDetail.classList.remove('inactive');

    
}

function closeSelectedProductDetail(){
    selectedProductDetail.classList.add('inactive');
}

// Voy a automatizar el despliegue de productos

const productList = []; //este es el que me devolvería las API's

// aquí me toca crearlo de cero, tienen name, image and price
// creo 3 productos
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    name: 'LCD Screen',
    price: 220,
    image: 'https://i.imgur.com/wfTzxqX.jpeg'
});
productList.push({
    name: 'Laptop',
    price: 240,
    image: 'https://i.imgur.com/4cYdNll.jpeg'
}); 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    name: 'LCD Screen',
    price: 220,
    image: 'https://i.imgur.com/wfTzxqX.jpeg'
});
productList.push({
    name: 'Laptop',
    price: 240,
    image: 'https://i.imgur.com/4cYdNll.jpeg'
}); 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
productList.push({
    name: 'LCD Screen',
    price: 220,
    image: 'https://i.imgur.com/wfTzxqX.jpeg'
});
productList.push({
    name: 'Laptop',
    price: 240,
    image: 'https://i.imgur.com/4cYdNll.jpeg'
}); 

const cardContainter = document.querySelector('.cards-container');

renderProducts(productList);
//voy a ir haciendo appends de cada elemento en el cardContainer

function renderProducts(productList){

    for (product of productList){

        //___Primero, MAQUETAR tengo que crear cada div del product-card___
    
        // CREO product card y le meto sus CLASES
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //creo img, le meto su imagen en ATRIBUTO src y la APPEND en product card
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        // creo product-info, le meto sus clases y le meto sus elmentos
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        /// creo el div dentro del produc-info y le meto sus párrafos
        productInfoDiv = document.createElement('div');
    
        // párrafos del precio y nombre, y les asigno su TEXTO INTERNO
    
        productPrice = document.createElement('p');
        productName = document.createElement('p');
    
        productPrice.innerText = ` $ ${product.price}`;
        productName.innerText = ` $ ${product.name}`;
    
        //Creo el Figure, le meto la img (con su src)
    
        const productInfoFigure = document.createElement('figure');
        const productInfoImgCart = document.createElement('img');
    
        productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        // _______Segundo, INSERTAR/APPEND cada elemento del product-car___________
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productInfoImgCart);
    
        //agrego todo al cards containter
    
        cardContainter.appendChild(productCard);

        // __________Tercero, crearle los eventlister al clickear producots _______

        productImg.addEventListener('click', openSelectedProductDetail);
    
        
        
    
    }
    
}

/* HTML a modelar
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */


