const btn = document.querySelector(".btn");
const project = document.querySelector(".project");
const content = document.querySelector(".content");
const btnX = document.querySelector(".btnX");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
  project.classList.add("hidden");
  content.classList.add("show");
  overlay.classList.add("show");
});

btnX.addEventListener("click", () => {
  content.classList.remove("show");
  project.classList.remove("hidden");
  overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
  content.classList.remove("show");
  project.classList.remove("hidden");
  overlay.classList.remove("show");
});
