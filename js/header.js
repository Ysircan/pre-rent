fetch('./partials/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;

    const toggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  });
