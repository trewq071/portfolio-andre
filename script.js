const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
