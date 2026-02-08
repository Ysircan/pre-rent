// ===== load header =====
fetch('./partials/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
    setActiveNav();
  });

// ===== active nav =====
function setActiveNav() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('is-active');

    if (path.endsWith(href)) {
      link.classList.add('is-active');
    }
  });

  // 首页兜底
  if (
    path.endsWith('/') ||
    path.endsWith('index.html')
  ) {
    const homeLink = document.querySelector('.nav-link[href="index.html"]');
    if (homeLink) homeLink.classList.add('is-active');
  }
}
