const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const message = form.elements.message.value.trim();
  const text = `Hello Śāṅʈī,%0A%0AMy name is ${encodeURIComponent(name)}.%0APhone: ${encodeURIComponent(phone)}.%0A%0AI'm interested in: ${encodeURIComponent(message)}.`;
  window.open(`https://wa.me/919392190818?text=${text}`, "_blank", "noopener");
});
