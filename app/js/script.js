const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu')

burger.addEventListener('click', function(){
    navMenu.classList.toggle('show_nav')
})