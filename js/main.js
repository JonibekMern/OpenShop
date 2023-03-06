//---------------------------------  Burger menu
function burgerMenu() {
    const headerBottomNav = document.querySelector('.header__bottom-nav')
    const burger = document.querySelector('.header__bottom-burger')
    const burgerSpan = document.querySelectorAll('.header__bottom-burger-span')
    const sectionIntro = document.querySelector('.intro')

    burger.addEventListener('click', function () {
        burgerSpan.forEach(item => {
            item.classList.toggle('activeBurger')
        })
        headerBottomNav.classList.toggle('br')
        sectionIntro.classList.toggle('intro-mt-400')
    })
}
burgerMenu()

// --------------------------------- Burger menu End

