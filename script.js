const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.textContent = isOpen ? '✕' : '☰';
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after tapping a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.textContent = '☰';
    toggle.setAttribute('aria-expanded', 'false');
  });
});

