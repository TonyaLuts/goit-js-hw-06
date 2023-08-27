const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const finalValue = document.querySelector("#value");

btnDecrement.addEventListener("click", handlerDecrement);
btnIncrement.addEventListener("click", handlerIncrement);

let counterValue = 0;

function handlerDecrement() {
  counterValue -= 1;
  finalValue.textContent = counterValue;
}

function handlerIncrement() {
  counterValue += 1;
  finalValue.textContent = counterValue;
}
