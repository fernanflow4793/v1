window.addEventListener('DOMContentLoaded', init);
let hamburger;
let navMenu;
let prevScrollPos;

function init(){
    prevScrollPos = window.pageYOffset;
    hamburger = document.querySelector(".hamburger");
    navMenu = document.querySelector(".nav-menu");
    let navLink = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
}

// used to hide navbar and scroll-down arrow
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    closeMenu();
    if (prevScrollPos > currentScrollPos) {
        document.getElementById('section').style.display = 'block';
        //document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('section').style.display = 'none';
        //document.getElementById('navbar').style.top = '-55px';
    }
    prevScrollPos = currentScrollPos;
}

function sendEmail(){
    window.location.href = 'mailto:f4vazquez@gmail.com';
}

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}