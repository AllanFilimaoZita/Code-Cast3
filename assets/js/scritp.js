// =============== Menu Activo ===============
const links = document.querySelectorAll('navList a');
const urlAtual = window.location.pathname;

links.forEach (link => {
    if (link.getAttribute('href') === urlAtual.split('/').pop()) {
        link.classList.add('active');
    }
});

