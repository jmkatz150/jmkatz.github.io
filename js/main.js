// Shared site behavior.
// Controls the mobile navigation menu and shared favicon.

// Add the JK mark only as the browser-tab favicon.
// Using an absolute path keeps it working from both root and /projects pages.
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = "/jmkatz.github.io/favicon.svg";
document.head.appendChild(favicon);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu-toggle").forEach((button) => {
    const header = button.parentElement;
    const nav = header.querySelector("nav");

    if (!nav) return;

    // Open or close the menu when the Menu button is clicked.
    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "Close" : "Menu";
    });

    // Close the menu after a navigation link is clicked.
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");

        button.setAttribute("aria-expanded", "false");
        button.textContent = "Menu";
      });
    });
  });
});