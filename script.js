const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const yearTargets = document.querySelectorAll("#current-year");
const transitionOverlay = document.createElement("div");
transitionOverlay.className = "page-transition";
document.body.appendChild(transitionOverlay);

const globalCta = document.createElement("aside");
globalCta.className = "global-cta";
globalCta.innerHTML = `
  <div class="global-cta-label">Join Alpitos</div>
  <p class="global-cta-text">Be a part of alpitos ecosystem and start creating value</p>
  <a class="global-cta-link" href="https://apps.alpitos.com/signup" target="_blank" rel="noreferrer">Start creating value</a>
`;
document.body.appendChild(globalCta);


if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

yearTargets.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("is-transitioning");
  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });

  const links = document.querySelectorAll('a[href$=".html"], a[href="index.html"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const target = link.getAttribute("target");

      if (!href || target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      document.body.classList.remove("is-ready");
      document.body.classList.add("is-transitioning");

      window.setTimeout(() => {
        window.location.href = href;
      }, 320);
    });
  });
});
