//Dinamismo de la web

const emailAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerButton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const asideProduct = document.querySelector(".product-detail");

const containerProducts = document.querySelector(".cards-container");

emailAccount.addEventListener('click', toggleDesktopMenu);
burguerButton.addEventListener('click', toggleMobileMenu);
shoppingIcon.addEventListener('click', toggleProductAside);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
    asideProduct.classList.add("inactive")
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    asideProduct.classList.add("inactive");
}

function toggleProductAside () {
    const isActiveDesktop = desktopMenu.classList.contains("inactive");
    const isActiveMobile = mobileMenu.classList.contains("inactive");
    
    if (!isActiveDesktop)
        desktopMenu.classList.add("inactive");

    if (!isActiveMobile)
        mobileMenu.classList.add("inactive")

    asideProduct.classList.toggle("inactive")
}

const databaseProducts = [];

databaseProducts.push({name:"Bike", price:"120,00", image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });
databaseProducts.push({name:"Bike", price:"120,00", image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });
databaseProducts.push({name:"Bike", price:"120,00", image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" });


function cardsProducts (database,container){
    for(product of database){
       const divProductCard = document.createElement("DIV");
       divProductCard.classList.add("product-card")
       const image = document.createElement("IMG");
       image.setAttribute("src",product.image)


       const divInfo = document.createElement("DIV");
       divInfo.classList.add("product-info");

       const divInfoContainer = document.createElement("DIV");
       const price = document.createElement("P");
       price.innerText = '$' + product.price;
       const name = document.createElement("P");
       name.innerText= '$' + product.name;
       divInfoContainer.append(price,name);

       const figure = document.createElement("FIGURE");
       const figureIcon = document.createElement("IMG");
       figureIcon.setAttribute("src","./icons/bt_add_to_cart.svg");
       figure.append(figureIcon);

       
       divInfo.append(divInfoContainer,figure);
       divProductCard.append(image,divInfo);
       container.append(divProductCard);
    }
}


cardsProducts(databaseProducts,containerProducts);
/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/
