const toggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('.my-navbar-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});