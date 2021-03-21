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

navItem.forEach(n=> n.addEventListener('click', linkAction));


//tabs
const tabLink = document.querySelectorAll('.tab');

function tabAction(){
  tabLink.forEach(n => n.classList.remove('tab_active'));
  this.classList.add('tab_active');
}

tabLink.forEach(n=> n.addEventListener('click', tabAction))


function openPage(pageName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;


    tabcontent = document.getElementsByClassName("tab_desc");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "flex";
  
    // Add the specific color to the button used to open the tab content
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

 