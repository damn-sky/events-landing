const form = document.querySelector("#ticket-form");
const pack = document.querySelector("#pack");
const note = document.querySelector("#form-note");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#site-nav");

document.querySelectorAll("[data-pack]").forEach((link) => {
  link.addEventListener("click", () => {
    pack.value = link.dataset.pack;
  });
});

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  note.hidden = false;
  note.textContent = "Демо-заявка: " + data.get("name") + ", «" + data.get("pack") + "». Оплата не списывается.";
  form.reset();
});
