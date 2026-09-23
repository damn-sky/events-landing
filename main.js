const form = document.querySelector("#ticket-form");
const pack = document.querySelector("#pack");
const note = document.querySelector("#form-note");
const noteText = document.querySelector("#form-note-text");
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
  noteText.textContent = data.get("name") + ", " + data.get("count") + " мест, «" + data.get("pack") + "».";
  note.hidden = false;
  form.classList.add("is-sent");
});
