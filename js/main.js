window.renderMath = function (root = document) {
  if (!window.katex) return;
  root.querySelectorAll(".tex").forEach((el) => {
    const display = el.dataset.display === "true";
    try {
      katex.render(el.dataset.tex || el.textContent, el, {
        throwOnError: false,
        displayMode: display,
      });
    } catch (e) {}
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderMath();
  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    setTimeout(() => {
      el.style.transition = "all .6s ease";
      el.style.opacity = "1";
      el.style.transform = "none";
    }, 80 + i * 70);
  });
});
