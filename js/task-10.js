const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
const inputValue = document.querySelector("input");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const amountVal = inputValue.value;
  let boxSize = 30;
  const boxesArray = [];
  for (let i = 0; i < amountVal; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxSize += 10;

    boxesArray.push(box);
  }
  divBoxesEl.append(...boxesArray);
  console.log(divBoxesEl);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
