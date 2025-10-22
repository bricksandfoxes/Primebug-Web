const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-items');
    const navtext = document.querySelector('.navbar-text');
    const overlay = document.querySelector('.overlay');

    burger.addEventListener('click', () => {
        // Toggle Menu
        nav.classList.toggle('navbar-items-active');
        
        // Toggle Nav Text
        navtext.classList.toggle('navbar-text-active');
      
        // Toggle Burger Animation
        burger.classList.toggle('toggle');

        // Toggle Overlay
        overlay.classList.toggle('overlay-active');
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        nav.classList.remove('navbar-items-active');
        navtext.classList.remove('navbar-text-active');
        burger.classList.remove('toggle');
        overlay.classList.remove('overlay-active');
    });
}

navSlide();
