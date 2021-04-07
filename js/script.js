// Activating  Icons
feather.replace();

// Mega Menu Script
let mainMenu = document.querySelector(".main-menu")
let megaMenu = document.querySelector(".mega-menu")
mainMenu.addEventListener("mouseover", function () {
    megaMenu.classList.add("show-mega-menu");
    mouseleave();
    })
function mouseleave() {
    megaMenu.addEventListener("mouseleave", function () {
        megaMenu.classList.remove("show-mega-menu");
    })
}