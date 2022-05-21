const menuButton = document.querySelector(".header-burger__button")
const headerNav = document.querySelector(".header-nav")
menuButton.addEventListener("click", () => {
    headerNav.classList.toggle("is-open")
    menuButton.classList.toggle("header-burger__button--is-open")
})