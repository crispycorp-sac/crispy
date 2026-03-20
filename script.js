document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Activa/Desactiva el menú desplegable
            navMenu.classList.toggle('active');
            
            // Opcional: añade una clase al botón para animar las líneas si deseas
            menuToggle.classList.toggle('is-active');
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }
});
