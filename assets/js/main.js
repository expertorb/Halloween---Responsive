/*=============== SHOW MENU ===============*/
/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('toggle'),
      navClose = document.getElementById('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
     
    pagination: {
      el: ".swiper-pagination",
      clickable: true  
    },
  });

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView:'auto',
    spaceBetween: 16,
    loop: 'true',
     
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})
sr.reveal('.home-swiper, .new-swiper, .newsletter_container')
sr.reveal('.category_data, .trick_content, .footer_content', {interval: 100})
sr.reveal('.about_data, .discount_img', {origin: 'left'})
sr.reveal('.about_img, .discount_data', {origin: 'right'}) 