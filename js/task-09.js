function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanEl = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");

changeColorButtonEl.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
}
