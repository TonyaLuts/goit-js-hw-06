const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", handlerFontSize);

function handlerFontSize() {
  spanTextEl.style.fontSize = `${inputEl.value}px`;
}
