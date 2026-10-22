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

// 1_3.3
const ex2_text = document.getElementById("ex2_text");
const ex2_count = document.getElementById("ex2_count");

ex2_text.addEventListener("input", () => {
  ex2_count.textContent = `Wpisano ${ex2_text.value.length} znaków.`;
});

// 1_3.4
const ex6_text = document.getElementById("ex6_text");
const ex6_btn = document.getElementById("ex6_button");

var milis = 0;

function tick(time) {
  milis += time;
  if (milis % 1000 == 0) ex6_text.textContent = milis / 1000;
}

let timer;

ex6_btn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => tick(50), 50);
  } else {
    clearInterval(timer);
    timer = undefined;
  }
});
