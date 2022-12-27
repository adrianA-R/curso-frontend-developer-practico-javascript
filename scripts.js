//Dinamismo de la web

const emailAccount = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

emailAccount.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
}