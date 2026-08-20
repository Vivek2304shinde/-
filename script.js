/* =========================================================
   AUTHENTIC GRAIN — shared interaction layer
   Handles: active-panel tracking, progress dots, aroma particles
   ========================================================= */
(() => {
  "use strict";

  const panelsEl = document.querySelector(".panels");
  const panels = Array.from(document.querySelectorAll(".panel"));
  const dotsEl = document.querySelector(".dots");

  if (!panels.length) return;

  /* Build progress dots */
  if (dotsEl) {
    panels.forEach((panel, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to section ${i + 1}`);
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", () => {
        panels[i].scrollIntoView({ behavior: "smooth" });
      });
      dotsEl.appendChild(dot);
    });
  }

  const dotButtons = dotsEl ? Array.from(dotsEl.children) : [];

  /* Track active panel */
  const setActive = (index) => {
    panels.forEach((p, i) => p.classList.toggle("is-active", i === index));
    dotButtons.forEach((d, i) => d.classList.toggle("is-active", i === index));
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            const idx = panels.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: panelsEl || null, threshold: [0.55] }
    );
    panels.forEach((p) => observer.observe(p));
  } else {
    panels.forEach((p) => p.classList.add("is-active"));
  }

  /* Generate aroma particles (Indrayani hero only) */
  document.querySelectorAll(".aroma-particles").forEach((field) => {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "aroma-particle";
      dot.style.left = `${8 + Math.floor((i * 97) % 84)}%`;
      dot.style.bottom = `${Math.floor((i * 53) % 40)}%`;
      dot.style.animationDelay = `${(i % 8) * 0.85}s`;
      field.appendChild(dot);
    }
  });

  /* Keyboard navigation between panels */
  window.addEventListener("keydown", (e) => {
    const activeIndex = panels.findIndex((p) => p.classList.contains("is-active"));
    if (activeIndex === -1) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      const next = panels[activeIndex + 1];
      if (next) next.scrollIntoView({ behavior: "smooth" });
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      const prev = panels[activeIndex - 1];
      if (prev) prev.scrollIntoView({ behavior: "smooth" });
    }
  });
})();
