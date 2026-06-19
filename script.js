const navLinks = document.querySelectorAll('.navlist a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Saglyatun active kadhun tak
        navLinks.forEach(l => l.classList.remove('active'));
        // Jya var click kela tyala active de
        this.classList.add('active');
    });
});
