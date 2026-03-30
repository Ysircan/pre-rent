document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("header-placeholder");
  if (!placeholder) return;

  fetch("/partials/header.html")
    .then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load header: ${res.status}`);
      }
      return res.text();
    })
    .then(html => {
      placeholder.innerHTML = html;

      // ===== HEADER MENU =====
      const toggle = document.getElementById("menuToggle");
      const mobileNav = document.getElementById("mobileNav");

      if (toggle && mobileNav) {
        toggle.addEventListener("click", () => {
          mobileNav.classList.toggle("show");
        });
      }

      // ===== ACTIVE NAV =====
      const page = document.body.dataset.page;
      if (!page) return;

      document.querySelectorAll("[data-page]").forEach(el => {
        if (el.dataset.page === page) {
          el.classList.add("is-active");
        }
      });
    })
    .catch(err => {
      console.error(err);
    });
});


/* ===== WHO SECTION HOVER (独立模块) ===== */

document.addEventListener("DOMContentLoaded", () => {

  const whoSection = document.querySelector(".who");
  if (!whoSection) return; // 不是首页直接退出

  const items = whoSection.querySelectorAll(".item");
  const leftText = whoSection.querySelector("#leftText");

  if (!items.length || !leftText) return;

  const defaultText = leftText.innerText;

  items.forEach(item => {

    item.addEventListener("mouseenter", () => {
      leftText.style.opacity = 0;

      setTimeout(() => {
        leftText.innerText = item.dataset.text;
        leftText.style.opacity = 1;
      }, 120);
    });

    item.addEventListener("mouseleave", () => {
      leftText.style.opacity = 0;

      setTimeout(() => {
        leftText.innerText = defaultText;
        leftText.style.opacity = 1;
      }, 120);
    });

  });

});
