document.addEventListener("DOMContentLoaded", () => {
  fetch("./partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-placeholder").innerHTML = html;

      // ===== 原来的代码照旧 =====

      const toggle = document.getElementById("menuToggle");
      const mobileNav = document.getElementById("mobileNav");

      if (toggle && mobileNav) {
        toggle.addEventListener("click", () => {
          mobileNav.classList.toggle("show");
        });
      }

      const page = document.body.dataset.page;
      if (!page) return;

      document.querySelectorAll("[data-page]").forEach(el => {
        if (el.dataset.page === page) {
          el.classList.add("is-active");
        }
      });
    });
});
