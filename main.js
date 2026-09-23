const form = document.querySelector("#ticket-form");
const pack = document.querySelector("#pack");
const note = document.querySelector("#form-note");

document.querySelectorAll("[data-pack]").forEach((link) => {
  link.addEventListener("click", () => {
    pack.value = link.dataset.pack;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  note.hidden = false;
  note.textContent = "Заявка принята в демо: " + data.get("name") + ", пакет «" + data.get("pack") + "». Оплата на этом макете не списывается.";
  form.reset();
});
