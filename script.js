document.addEventListener('DOMContentLoaded', () => {

    // --- HAMBURGER MENU ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Close menu when any nav link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // --- SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        revealElements.forEach(el => observer.observe(el));
    }

});
