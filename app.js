document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.getElementById("icon_menu");
    const menuMobile = document.getElementById("menu_mobile");
    const iconCloseMenu = document.getElementById("close_menu");
    const htmlElement = document.querySelector("html");
    iconMenu.addEventListener("click", openMenu);
    iconCloseMenu.addEventListener("click", closeMenu);

    function openMenu() {
        menuMobile.classList.add("active");
        htmlElement.classList.add("lock-scroll");
    }

    function closeMenu() {
        menuMobile.classList.remove("active");
        htmlElement.classList.remove("lock-scroll");
    }
});




