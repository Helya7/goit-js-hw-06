const inputEl = document.querySelector("#controls input");
const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesContainerEl = document.querySelector("#boxes");

createButtonEl.addEventListener("click", createBoxes);
destroyButtonEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainerEl.append(...boxes);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}