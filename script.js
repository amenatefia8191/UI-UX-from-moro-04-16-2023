'use strick';

const navMenu = () => {
    const bugger  = document.querySelector('.bugger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    //toggle nav 
    bugger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
        
         // animation 
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '' ;
            }else {
                link.style.animation = `navLinkFake 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    })
}

navMenu();