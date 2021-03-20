const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_menu')
const burgerClose = document.querySelector('.burger_close')
const navItem = document.querySelectorAll('.nav_item')

//show nav
burger.addEventListener('click', function(){
    navMenu.classList.add('show_nav')
})

//remove nav
burgerClose.addEventListener('click', function(){
    navMenu.classList.remove('show_nav')
})

function linkAction(){
    navItem.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    navMenu.classList.remove('show_nav');
    
}

navItem.forEach(n=> n.addEventListener('click', linkAction))