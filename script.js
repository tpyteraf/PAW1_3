// 1_3.1

const ex1_button = document.getElementById("ex1_button");
const ex1_img = document.querySelector("#ex1_content img");

ex1_button.addEventListener("click", () => {
  ex1_img.classList.toggle("move");
});

// 1_3.2
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

const ex4_button = document.getElementById("ex4_button");

ex4_button.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor =
    `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}`;
});
