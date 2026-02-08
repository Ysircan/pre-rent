// ===== header active state =====
(function () {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.classList.remove('is-active');

    const href = link.getAttribute('href');

    if (
      (path.endsWith('index.html') || path === '/' || path === '') &&
      href.includes('index.html')
    ) {
      link.classList.add('is-active');
    }

    if (path.endsWith('minimum-standards.html') && href.includes('minimum-standards')) {
      link.classList.add('is-active');
    }

    if (path.endsWith('professional-service.html') && href.includes('professional-service')) {
      link.classList.add('is-active');
    }

    if (path.endsWith('room-suitability.html') && href.includes('room-suitability')) {
      link.classList.add('is-active');
    }

    if (path.endsWith('book.html') && href.includes('book')) {
      link.classList.add('is-active');
    }
  });
})();
