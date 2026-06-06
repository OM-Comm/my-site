(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  const close = nav?.querySelector(".nav-close");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const closeMenu = () => {
    nav?.classList.remove("nav--open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("nav--open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
  });
  close?.addEventListener("click", closeMenu);
  menu?.addEventListener("click", (event) => {
    if (event.target.closest("a") || event.target === menu) closeMenu();
  });

  const nodes = Array.from(document.querySelectorAll("[data-parallax]"));
  let ticking = false;
  const renderParallax = () => {
    ticking = false;
    if (reducedMotion.matches) {
      nodes.forEach((node) => node.style.setProperty("--parallax-y", "0px"));
      return;
    }
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const cap = mobile ? 76 : 96;
    const viewportCenter = window.innerHeight / 2;
    nodes.forEach((node) => {
      const rect = node.parentElement.getBoundingClientRect();
      const speed = Number(node.dataset[mobile ? "mobileSpeed" : "desktopSpeed"]);
      const raw = (viewportCenter - (rect.top + rect.height / 2)) * speed;
      const offset = Math.max(-cap, Math.min(cap, raw));
      node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  };
  const requestParallax = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(renderParallax);
    }
  };
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax);
  reducedMotion.addEventListener?.("change", requestParallax);
  requestParallax();
})();
