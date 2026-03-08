const glow = document.querySelector(".cursor-glow");
const cards = document.querySelectorAll("[data-tilt]");

if (glow) {
  window.addEventListener("pointermove", (event) => {
    glow.style.transform = `translate3d(${event.clientX - 170}px, ${event.clientY - 170}px, 0)`;
  });
}

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced) {
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 6;
      const ry = (px - 0.5) * 8;

      card.style.transform = `translateY(-6px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}
