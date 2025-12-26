const btn = document.querySelector(".btn");
const btnX = document.querySelector(".btnX");
const modal = document.querySelector(".hidden");
const project = document.querySelector(".project");

btn.addEventListener("click", () => {
  project.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});
btnX.addEventListener("click", () => {
  project.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});
