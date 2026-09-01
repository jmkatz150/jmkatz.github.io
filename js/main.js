// Shared site behavior.
// Keep page content and styling in HTML/CSS; this file is only for interaction.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-toggle").forEach((button) => {
    const nav = button.parentElement.querySelector("nav");

    if (!nav) return;

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Close" : "Menu";
    });
  });
});
