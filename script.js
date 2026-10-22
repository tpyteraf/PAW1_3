// 1_3.1

const ex1_button = document.getElementById("ex1_button");
const ex1_img = document.querySelector("#ex1_content img");

ex1_button.addEventListener("click", () => {
  ex1_img.classList.toggle("move");
});
