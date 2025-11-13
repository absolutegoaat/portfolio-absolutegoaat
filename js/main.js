/* -----------------------------
   🌠 Background Stars
   ----------------------------- */

function createStars(count = 25) {
  const container = $("#stars");
  for (let i = 0; i < count; i++) {
    const star = el("div", { class: "star" });
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(star);
  }
}

/* -----------------------------
   🚀 Initialize
   ----------------------------- */

window.addEventListener("DOMContentLoaded", () => {
  createStars();
});
