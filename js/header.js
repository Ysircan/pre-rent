document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
    });
  }

  // active nav highlight
  const page = document.body.dataset.page;
  if (!page) return;

  document
    .querySelectorAll("[data-page]")
    .forEach(el => {
      if (el.dataset.page === page) {
        el.classList.add("is-active");
      }
    });
});
