const tooglebtn = document.querySelector('.navbar__tooglebtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

tooglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
